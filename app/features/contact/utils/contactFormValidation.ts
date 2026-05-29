import type { RefObject } from 'react';
import type { ContactField } from '../../../types/contact/content.types';
import type {
  ContactFieldValidation,
  ContactFormErrors,
  ContactFormTouchedFields,
  ContactFormValues,
} from '../../../types/contact/form.types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldValidation: Record<string, ContactFieldValidation> = {
  company: {
    autoComplete: 'organization',
    hint: 'Enter your company or organization name.',
    maxLength: 80,
    required: false,
  },
  email: {
    autoComplete: 'email',
    hint: 'Use a business email so we can follow up with next steps.',
    maxLength: 120,
    required: true,
  },
  fullName: {
    autoComplete: 'name',
    hint: 'Enter your first and last name.',
    maxLength: 80,
    minLength: 2,
    required: true,
  },
  message: {
    autoComplete: 'off',
    hint: 'Include your hiring goals, timeline, must-have skills, and team size.',
    maxLength: 1200,
    minLength: 20,
    required: true,
  },
  roleNeeded: {
    autoComplete: 'organization-title',
    hint: 'Tell us the role or function you want to hire for.',
    maxLength: 100,
    minLength: 2,
    required: true,
  },
};

export function createInitialContactFormValues(fields: ContactField[]) {
  return fields.reduce<ContactFormValues>((values, field) => {
    values[field.name] = '';
    return values;
  }, {});
}

export function createTouchedContactFields(fields: ContactField[]) {
  return fields.reduce<ContactFormTouchedFields>((touchedFields, field) => {
    touchedFields[field.name] = true;
    return touchedFields;
  }, {});
}

export function focusFirstInvalidContactField(
  fields: ContactField[],
  errors: ContactFormErrors,
  formRef: RefObject<HTMLFormElement | null>
) {
  const firstInvalidField = fields.find((field) => errors[field.name]);

  if (!firstInvalidField) {
    return;
  }

  formRef.current
    ?.querySelector<HTMLElement>(`[name="${firstInvalidField.name}"]`)
    ?.focus();
}

export function getContactFieldValidation(name: string) {
  return fieldValidation[name];
}

export function validateContactField(field: ContactField, value: string) {
  const validation = getContactFieldValidation(field.name);
  const trimmedValue = value.trim();

  if (!validation) {
    return '';
  }

  if (validation.required && !trimmedValue) {
    return `${field.label} is required.`;
  }

  if (
    field.type === 'email' &&
    trimmedValue &&
    !emailPattern.test(trimmedValue)
  ) {
    return 'Enter a valid work email address.';
  }

  if (
    validation.minLength &&
    trimmedValue &&
    trimmedValue.length < validation.minLength
  ) {
    return `${field.label} must be at least ${validation.minLength} characters.`;
  }

  if (trimmedValue.length > validation.maxLength) {
    return `${field.label} must be ${validation.maxLength} characters or fewer.`;
  }

  return '';
}

export function validateContactForm(
  fields: ContactField[],
  values: ContactFormValues
) {
  return fields.reduce<ContactFormErrors>((errors, field) => {
    const error = validateContactField(field, values[field.name] ?? '');

    if (error) {
      errors[field.name] = error;
    }

    return errors;
  }, {});
}
