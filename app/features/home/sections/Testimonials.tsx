import { TestimonialCard } from '../../../components/home/TestimonialCard';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { TestimonialsProps } from '../../../types/home/sections.types';

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <MotionSection
      aria-labelledby='testimonials-title'
      className='bg-testimonials-surface'
    >
      <div className='container mx-auto px-6 py-10 lg:py-20'>
        <h2
          id='testimonials-title'
          className='font-display text-heading mb-4 text-center text-3xl font-semibold'
        >
          {content.heading}
        </h2>
        <p className='text-center'>{content.description}</p>
        <div className='-mx-6 mt-10 scrollbar-none overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0 lg:mt-20'>
          <ol
            aria-label={content.heading}
            className='flex snap-x snap-mandatory items-stretch gap-6 after:block after:min-w-0.5 md:grid md:grid-cols-3 md:after:hidden'
          >
            {content.items.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author.name}
                author={testimonial.author}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
}
