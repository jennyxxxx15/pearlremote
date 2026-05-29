import contactPageContent from '../../content/contact.json';
import { appendContactInquiryToGoogleSheet } from '../../features/contact/utils/googleSheets';
import { validateContactForm } from '../../features/contact/utils/contactFormValidation';
import type { ContactPageContent } from '../../types/contact/content.types';
import type { ContactFormValues } from '../../types/contact/form.types';

export const runtime = 'nodejs';

const contactContent = contactPageContent as ContactPageContent;

function parseContactFormValues(value: unknown) {
  if (!value || typeof value !== 'object') {
    return null;
  }

  return contactContent.inquiry.fields.reduce<ContactFormValues>(
    (values, field) => {
      const fieldValue = (value as Record<string, unknown>)[field.name];
      values[field.name] = typeof fieldValue === 'string' ? fieldValue : '';
      return values;
    },
    {}
  );
}

export async function POST(request: Request) {
  try {
    const payload = parseContactFormValues(await request.json());

    if (!payload) {
      return Response.json(
        { message: 'Invalid contact inquiry payload.' },
        { status: 400 }
      );
    }

    const errors = validateContactForm(contactContent.inquiry.fields, payload);

    if (Object.keys(errors).length > 0) {
      return Response.json(
        { errors, message: 'Please fix the highlighted fields.' },
        { status: 400 }
      );
    }

    await appendContactInquiryToGoogleSheet(payload);

    return Response.json({
      message: 'Your inquiry has been submitted.',
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: 'Unable to submit your inquiry right now.' },
      { status: 500 }
    );
  }
}
