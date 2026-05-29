import type { ContactField } from './content.types';

export type ContactFieldValidation = {
  autoComplete: string;
  hint: string;
  maxLength: number;
  minLength?: number;
  required: boolean;
};

export type ContactFormErrors = {
  [fieldName: string]: string | undefined;
};

export type ContactFormProps = {
  fields: ContactField[];
  submitLabel: string;
};

export type ContactFormTouchedFields = {
  [fieldName: string]: boolean | undefined;
};

export type ContactFormValues = {
  [fieldName: string]: string;
};
