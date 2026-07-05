'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { TestimonialCardProps } from '../../../types/home/components.types';

type ContactTestimonialProps = {
  featuredTestimonial: TestimonialCardProps;
  testimonials: TestimonialCardProps[];
};

export function ContactTestimonial({
  featuredTestimonial,
  testimonials,
}: ContactTestimonialProps) {
  const [testimonial, setTestimonial] = useState<TestimonialCardProps | null>(
    null
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (window.location.hash === '#mel') {
        setTestimonial(featuredTestimonial);

        return;
      }

      setTestimonial(
        testimonials[Math.floor(Math.random() * testimonials.length)] ?? null
      );
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [featuredTestimonial, testimonials]);

  if (!testimonial) {
    return null;
  }

  return (
    <figure className='border-contact-card-border bg-contact-card-surface rounded-2xl border p-6 shadow-sm lg:p-8'>
      <blockquote className='text-heading font-display text-xl leading-snug font-semibold'>
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <figcaption className='border-contact-card-border mt-6 flex items-center gap-4 border-t pt-5'>
        <Image
          src={testimonial.author.image.src}
          alt={testimonial.author.image.alt}
          width={48}
          height={48}
          sizes='48px'
          className='h-12 w-12 rounded-full object-cover'
        />
        <div>
          <p className='text-heading font-semibold'>
            {testimonial.author.name}
          </p>
          <p className='mt-1 text-sm'>{testimonial.author.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
