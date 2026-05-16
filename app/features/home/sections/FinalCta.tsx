import { MotionSection } from '../../../components/layout/MotionSection';
import { Button } from '../../../components/ui/Button';
import type { FinalCtaProps } from '../../../types/home/sections.types';

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <MotionSection
      aria-labelledby='final-cta-title'
      className='container mx-auto px-6 pb-10 lg:pb-20'
    >
      <div className='bg-primary rounded-[40px] py-10 md:py-20'>
        <div className='mx-auto px-4 md:px-20 lg:max-w-3/5 lg:px-0'>
          <h2
            id='final-cta-title'
            className='font-display mb-6 text-center text-3xl leading-snug font-semibold text-white'
          >
            {content.heading}
          </h2>
          <p className='text-cta-copy-muted mb-10 text-center text-lg'>
            {content.description}
          </p>
          <div className='text-center'>
            <Button variant='white' className='shadow-xl!'>
              {content.action.label}
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
