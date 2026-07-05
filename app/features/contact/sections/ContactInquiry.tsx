import { MotionSection } from '../../../components/layout/MotionSection';
import type { ContactInquiryProps } from '../../../types/contact/sections.types';
import { CalendlyInlineWidget } from '../components/CalendlyInlineWidget';
import { ContactInquiryForm } from '../components/ContactInquiryForm';
import { ContactTestimonial } from '../components/ContactTestimonial';

export function ContactInquiry({
  content,
  featuredTestimonial,
  testimonials,
}: ContactInquiryProps) {
  const { description, details, fields, heading, submitLabel } = content;
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <MotionSection
      aria-labelledby='contact-inquiry-title'
      className='container mx-auto px-6 pb-10 lg:pb-20'
    >
      <div className='lg:grid-cols-contact-inquiry grid gap-6 lg:items-start'>
        <div className='grid gap-6'>
          {calendlyUrl ? <CalendlyInlineWidget url={calendlyUrl} /> : null}

          <section
            aria-labelledby='contact-inquiry-title'
            className='border-contact-card-border bg-contact-card-surface rounded-2xl border p-6 shadow-sm lg:p-12'
          >
            <div className='max-w-2xl'>
              <h2
                id='contact-inquiry-title'
                className='font-display text-heading text-2xl font-semibold lg:text-3xl'
              >
                {heading}
              </h2>
              <p className='mt-3'>{description}</p>
            </div>

            <ContactInquiryForm fields={fields} submitLabel={submitLabel} />
          </section>
        </div>

        <div className='grid gap-6'>
          <aside
            aria-labelledby='contact-details-title'
            className='bg-contact-details-surface text-contact-details-copy rounded-2xl p-6 lg:p-10'
          >
            <h2
              id='contact-details-title'
              className='font-display text-2xl font-semibold'
            >
              {details.heading}
            </h2>
            <p className='mt-3'>{details.description}</p>
            <dl className='mt-8 grid gap-5'>
              {details.items.map((item) => (
                <div
                  key={item.label}
                  className='border-contact-details-divider border-t pt-5'
                >
                  <dt className='text-contact-details-muted text-sm font-semibold'>
                    {item.label}
                  </dt>
                  <dd className='mt-1 font-semibold'>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <ContactTestimonial
            featuredTestimonial={featuredTestimonial}
            testimonials={testimonials}
          />
        </div>
      </div>
    </MotionSection>
  );
}
