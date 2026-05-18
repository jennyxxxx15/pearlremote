import { MotionSection } from '../../../components/layout/MotionSection';
import type { ContactHeroProps } from '../../../types/contact/sections.types';

export function ContactHero({ content }: ContactHeroProps) {
  const { description, heading } = content;

  return (
    <MotionSection
      aria-labelledby='contact-hero-title'
      className='container mx-auto px-6 pt-10 pb-8 lg:pt-20 lg:pb-12'
    >
      <div className='flex max-w-3xl flex-col gap-4 lg:gap-6'>
        <h1
          id='contact-hero-title'
          className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
        >
          {heading}
        </h1>
        <p className='text-lg'>{description}</p>
      </div>
    </MotionSection>
  );
}
