import { MotionSection } from '../../../components/layout/MotionSection';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import type { TalentProfileCtaProps } from '../../../types/talent/sections.types';

export function TalentProfileCta({ content }: TalentProfileCtaProps) {
  const { action, description, heading } = content;

  return (
    <MotionSection
      aria-labelledby='talent-profile-cta-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='bg-why-section-surface text-page-surface rounded-4xl px-6 py-10 text-center lg:px-12 lg:py-16'>
        <h2
          id='talent-profile-cta-title'
          className='font-display text-3xl font-semibold'
        >
          {heading}
        </h2>
        <p className='text-why-copy-muted mx-auto mt-4 max-w-2xl'>
          {description}
        </p>
        <ButtonLink
          href={action.href}
          className='mt-8 w-full text-center sm:w-auto'
          variant='white'
        >
          {action.label}
        </ButtonLink>
      </div>
    </MotionSection>
  );
}
