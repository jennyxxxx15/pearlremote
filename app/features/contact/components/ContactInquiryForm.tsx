'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { Button } from '../../../components/ui/Button';
import type { ContactField } from '../../../types/contact/content.types';
import type {
  ContactFormErrors,
  ContactFormProps,
  ContactFormTouchedFields,
  ContactFormValues,
} from '../../../types/contact/form.types';
import {
  createInitialContactFormValues,
  createTouchedContactFields,
  focusFirstInvalidContactField,
  getContactFieldValidation,
  validateContactField,
  validateContactForm,
} from '../utils/contactFormValidation';

export function ContactInquiryForm({ fields, submitLabel }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [touchedFields, setTouchedFields] = useState<ContactFormTouchedFields>(
    {}
  );
  const [values, setValues] = useState<ContactFormValues>(() =>
    createInitialContactFormValues(fields)
  );

  function handleBlur(
    field: ContactField,
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const error = validateContactField(field, event.currentTarget.value);

    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [field.name]: true,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field.name]: error,
    }));
  }

  function handleChange(
    field: ContactField,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const nextValue = event.currentTarget.value;

    setStatusMessage('');
    setValues((currentValues) => ({
      ...currentValues,
      [field.name]: nextValue,
    }));

    if (!touchedFields[field.name]) {
      return;
    }

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field.name]: validateContactField(field, nextValue),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(fields, values);
    const nextTouchedFields = createTouchedContactFields(fields);

    setErrors(nextErrors);
    setTouchedFields(nextTouchedFields);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage('Please fix the highlighted fields.');
      focusFirstInvalidContactField(fields, nextErrors, formRef);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const result = (await response.json()) as {
        errors?: ContactFormErrors;
        message?: string;
      };

      if (!response.ok) {
        const serverErrors = result.errors ?? {};

        setErrors(serverErrors);
        setStatusMessage(
          result.message ?? 'Unable to submit your inquiry right now.'
        );
        focusFirstInvalidContactField(fields, serverErrors, formRef);
        return;
      }

      setErrors({});
      setTouchedFields({});
      setValues(createInitialContactFormValues(fields));
      setStatusMessage(result.message ?? 'Your inquiry has been submitted.');
    } catch {
      setStatusMessage('Unable to submit your inquiry right now.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      aria-label='Contact inquiry'
      className='mt-8 grid gap-5 sm:grid-cols-2'
      noValidate
      onSubmit={handleSubmit}
    >
      {fields.map((field) => {
        const validation = getContactFieldValidation(field.name);
        const error = errors[field.name];
        const messageId = `${field.id}-message`;
        const message = error || validation?.hint;
        const inputClassName = [
          'border-contact-input-border bg-contact-input-surface focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-[border-color,box-shadow] outline-none focus:ring-4',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : '',
        ]
          .filter(Boolean)
          .join(' ');
        const textareaClassName = [
          'border-contact-input-border bg-contact-input-surface focus:border-primary focus:ring-primary/20 min-h-40 w-full resize-y rounded-xl border px-4 py-3 transition-[border-color,box-shadow] outline-none focus:ring-4',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div
            key={field.id}
            className={field.type === 'textarea' ? 'sm:col-span-2' : ''}
          >
            <label
              htmlFor={field.id}
              className='text-heading mb-2 block text-sm font-semibold'
            >
              {field.label}
              {validation?.required ? (
                <span aria-hidden='true' className='text-primary'>
                  {' '}
                  *
                </span>
              ) : null}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                aria-describedby={message ? messageId : undefined}
                aria-invalid={Boolean(error)}
                autoComplete={validation?.autoComplete}
                id={field.id}
                name={field.name}
                onBlur={(event) => handleBlur(field, event)}
                onChange={(event) => handleChange(field, event)}
                placeholder={field.placeholder}
                rows={6}
                value={values[field.name] ?? ''}
                className={textareaClassName}
              />
            ) : (
              <input
                aria-describedby={message ? messageId : undefined}
                aria-invalid={Boolean(error)}
                autoComplete={validation?.autoComplete}
                id={field.id}
                name={field.name}
                onBlur={(event) => handleBlur(field, event)}
                onChange={(event) => handleChange(field, event)}
                placeholder={field.placeholder}
                type={field.type}
                value={values[field.name] ?? ''}
                className={inputClassName}
              />
            )}
            {message ? (
              <p
                id={messageId}
                className={[
                  'mt-2 text-sm',
                  error ? 'font-semibold text-red-600' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {message}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className='sm:col-span-2'>
        <Button
          type='submit'
          className='w-full sm:w-auto'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : submitLabel}
        </Button>
        {statusMessage ? (
          <p className='mt-4 text-sm font-semibold' aria-live='polite'>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
