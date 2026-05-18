import { MotionSection } from '../../../components/layout/MotionSection';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import type { HowItWorksCtaProps } from '../../../types/how-it-works/sections.types';

export function HowItWorksCta({ content }: HowItWorksCtaProps) {
  return (
    <MotionSection
      aria-labelledby='how-it-works-cta-title'
      className='container mx-auto px-6 pb-10 lg:pb-20'
    >
      <div className='border-button-border bg-card-surface rounded-4xl border px-6 py-10 text-center lg:py-20'>
        <h2
          id='how-it-works-cta-title'
          className='font-display text-heading mb-4 text-3xl font-semibold'
        >
          {content.heading}
        </h2>
        <p>{content.description}</p>
        <div className='mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6'>
          <ButtonLink
            className='w-full text-center sm:w-auto'
            href={content.actions.primary.href}
            variant='primary'
          >
            {content.actions.primary.label}
          </ButtonLink>
          <ButtonLink
            className='w-full text-center shadow-none! sm:w-auto'
            href={content.actions.secondary.href}
            variant='white'
          >
            {content.actions.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </MotionSection>
  );
}
