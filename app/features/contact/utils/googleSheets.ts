import { createSign } from 'node:crypto';
import type { ContactFormValues } from '../../../types/contact/form.types';

type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

type GoogleSheetsConfig = {
  clientEmail: string;
  privateKey: string;
  sheetName: string;
  spreadsheetId: string;
};

type GoogleApiErrorResponse = {
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
};

type GoogleSheetValuesResponse = {
  values?: string[][];
};

const googleOAuthTokenUrl = 'https://oauth2.googleapis.com/token';
const googleSheetsScope = 'https://www.googleapis.com/auth/spreadsheets';

const sheetHeaders = [
  'Submitted At',
  'Full Name',
  'Email',
  'Company',
  'Role Needed',
  'Message',
];

function encodeBase64Url(value: object) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function getSheetRange(sheetName: string, cells: string) {
  return `'${sheetName.replace(/'/g, "''")}'!${cells}`;
}

function getGoogleApiErrorMessage(
  data: GoogleApiErrorResponse,
  fallbackMessage: string
) {
  const { error } = data;

  if (!error) {
    return fallbackMessage;
  }

  return [error.status, error.message].filter(Boolean).join(': ');
}

function getGoogleSheetsConfig() {
  const {
    GOOGLE_SHEETS_CLIENT_EMAIL: clientEmail,
    GOOGLE_SHEETS_PRIVATE_KEY: rawPrivateKey,
    GOOGLE_SHEETS_PRIVATE_KEY_BASE64: privateKeyBase64,
    GOOGLE_SHEETS_SHEET_NAME: sheetName = 'Sheet1',
    GOOGLE_SHEETS_SPREADSHEET_ID: spreadsheetId,
  } = process.env;

  if (!clientEmail || (!rawPrivateKey && !privateKeyBase64) || !spreadsheetId) {
    throw new Error('Google Sheets environment variables are missing.');
  }

  const privateKey = privateKeyBase64
    ? Buffer.from(privateKeyBase64, 'base64').toString('utf8')
    : (rawPrivateKey ?? '');
  const normalizedPrivateKey = privateKey
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/\\n/g, '\n');

  if (
    normalizedPrivateKey.includes(
      'REPLACE_WITH_A_NEW_SERVICE_ACCOUNT_PRIVATE_KEY'
    )
  ) {
    throw new Error('Google Sheets private key has not been configured.');
  }

  return {
    clientEmail,
    privateKey: normalizedPrivateKey,
    sheetName,
    spreadsheetId,
  };
}

function createGoogleServiceAccountJwt(config: GoogleSheetsConfig) {
  const now = Math.floor(Date.now() / 1000);
  const header = encodeBase64Url({
    alg: 'RS256',
    typ: 'JWT',
  });
  const payload = encodeBase64Url({
    aud: googleOAuthTokenUrl,
    exp: now + 3600,
    iat: now,
    iss: config.clientEmail,
    scope: googleSheetsScope,
  });
  const unsignedToken = `${header}.${payload}`;
  const signer = createSign('RSA-SHA256');

  signer.update(unsignedToken);
  signer.end();

  return `${unsignedToken}.${signer.sign(config.privateKey).toString('base64url')}`;
}

async function getGoogleAccessToken(config: GoogleSheetsConfig) {
  const assertion = createGoogleServiceAccountJwt(config);
  const response = await fetch(googleOAuthTokenUrl, {
    body: new URLSearchParams({
      assertion,
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });
  const tokenResponse = (await response.json()) as GoogleTokenResponse;

  if (!response.ok || !tokenResponse.access_token) {
    throw new Error(
      tokenResponse.error_description ||
        tokenResponse.error ||
        'Unable to authenticate with Google.'
    );
  }

  return tokenResponse.access_token;
}

async function appendGoogleSheetRows(
  config: GoogleSheetsConfig,
  accessToken: string,
  rows: string[][]
) {
  const range = encodeURIComponent(getSheetRange(config.sheetName, 'A:F'));
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}:append`
  );

  url.searchParams.set('insertDataOption', 'INSERT_ROWS');
  url.searchParams.set('valueInputOption', 'USER_ENTERED');

  const response = await fetch(url, {
    body: JSON.stringify({ values: rows }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (!response.ok) {
    const data = (await response.json()) as GoogleApiErrorResponse;

    throw new Error(
      `Unable to append contact inquiry to Google Sheets (${response.status}): ${getGoogleApiErrorMessage(
        data,
        'Unknown Google Sheets API error.'
      )}`
    );
  }
}

async function hasGoogleSheetHeaders(
  config: GoogleSheetsConfig,
  accessToken: string
) {
  const range = encodeURIComponent(getSheetRange(config.sheetName, 'A1:F1'));
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}`
  );
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = (await response.json()) as GoogleApiErrorResponse &
    GoogleSheetValuesResponse;

  if (!response.ok) {
    throw new Error(
      `Unable to read Google Sheet headers (${response.status}): ${getGoogleApiErrorMessage(
        data,
        'Unknown Google Sheets API error.'
      )}`
    );
  }

  return Boolean(data.values?.[0]?.length);
}

export async function appendContactInquiryToGoogleSheet(
  values: ContactFormValues
) {
  const config = getGoogleSheetsConfig();
  const accessToken = await getGoogleAccessToken(config);
  const submittedAt = new Date().toISOString();
  const rows = [
    [
      submittedAt,
      values.fullName?.trim() ?? '',
      values.email?.trim() ?? '',
      values.company?.trim() ?? '',
      values.roleNeeded?.trim() ?? '',
      values.message?.trim() ?? '',
    ],
  ];

  if (!(await hasGoogleSheetHeaders(config, accessToken))) {
    rows.unshift(sheetHeaders);
  }

  await appendGoogleSheetRows(config, accessToken, rows);
}
