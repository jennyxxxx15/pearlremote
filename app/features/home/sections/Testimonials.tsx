import { PeekSlider } from '../../../components/home/PeekSlider';
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
        <PeekSlider
          ariaLabel={content.heading}
          breakpoint='md'
          className='mt-10 lg:mt-20'
          listClassName='md:grid md:grid-cols-3'
        >
          {content.items.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author.name}
              author={testimonial.author}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </PeekSlider>
      </div>
    </MotionSection>
  );
}
