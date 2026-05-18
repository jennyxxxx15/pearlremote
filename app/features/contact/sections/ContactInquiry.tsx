import Image from 'next/image';
import { Button } from '../../../components/ui/Button';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { ContactInquiryProps } from '../../../types/contact/sections.types';
import { CalendlyInlineWidget } from '../components/CalendlyInlineWidget';

export function ContactInquiry({ content }: ContactInquiryProps) {
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

            <form className='mt-8 grid gap-5 sm:grid-cols-2'>
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={field.type === 'textarea' ? 'sm:col-span-2' : ''}
                >
                  <label
                    htmlFor={field.id}
                    className='text-heading mb-2 block text-sm font-semibold'
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={6}
                      className='border-contact-input-border bg-contact-input-surface focus:border-primary focus:ring-primary/20 min-h-40 w-full resize-y rounded-xl border px-4 py-3 transition-[border-color,box-shadow] outline-none focus:ring-4'
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      type={field.type}
                      className='border-contact-input-border bg-contact-input-surface focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-[border-color,box-shadow] outline-none focus:ring-4'
                    />
                  )}
                </div>
              ))}

              <div className='sm:col-span-2'>
                <Button type='submit' className='w-full sm:w-auto'>
                  {submitLabel}
                </Button>
              </div>
            </form>
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

          {details.testimonial ? (
            <figure className='border-contact-card-border bg-contact-card-surface rounded-2xl border p-6 shadow-sm lg:p-8'>
              <blockquote className='text-heading font-display text-xl leading-snug font-semibold'>
                &quot;{details.testimonial.quote}&quot;
              </blockquote>
              <figcaption className='border-contact-card-border mt-6 flex items-center gap-4 border-t pt-5'>
                <Image
                  src={details.testimonial.image.src}
                  alt={details.testimonial.image.alt}
                  width={48}
                  height={48}
                  sizes='48px'
                  className='h-12 w-12 rounded-full object-cover'
                />
                <div>
                  <p className='text-heading font-semibold'>
                    {details.testimonial.author}
                  </p>
                  <p className='mt-1 text-sm'>{details.testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </MotionSection>
  );
}
