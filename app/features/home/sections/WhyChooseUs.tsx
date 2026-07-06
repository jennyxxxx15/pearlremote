import { MotionSection } from '../../../components/layout/MotionSection';
import type { WhyChooseUsProps } from '../../../types/home/sections.types';
import { WhyChooseUsSlider } from '../components/WhyChooseUsSlider';

export function WhyChooseUs({ content }: WhyChooseUsProps) {
  return (
    <MotionSection
      aria-labelledby='why-choose-us-title'
      className='bg-why-section-surface text-page-surface'
    >
      <div className='container mx-auto grid gap-10 px-6 py-10 lg:py-20'>
        <div className='min-w-0'>
          <h2
            id='why-choose-us-title'
            className='font-display mb-6 text-3xl font-semibold lg:text-center lg:text-4xl'
          >
            {content.heading}
          </h2>
          <div className='text-why-copy-muted max-w-4xl space-y-4 lg:mx-auto lg:text-center'>
            {content.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <WhyChooseUsSlider reasons={content.reasons} />
          <p className='text-why-copy-muted mt-10 max-w-5xl lg:mx-auto lg:text-center'>
            {content.closing}
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
