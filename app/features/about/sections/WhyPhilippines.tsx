import type { ElementType } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { IoLanguage } from 'react-icons/io5';
import { LuHandshake } from 'react-icons/lu';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { AboutPhilippinesIconName } from '../../../types/about/content.types';
import type { WhyPhilippinesProps } from '../../../types/about/sections.types';

const reasonIcons: Record<AboutPhilippinesIconName, ElementType> = {
  handshake: LuHandshake,
  language: IoLanguage,
  technology: GrTechnology,
};

export function WhyPhilippines({ content }: WhyPhilippinesProps) {
  return (
    <MotionSection
      aria-labelledby='why-philippines-title'
      className='bg-section-surface'
    >
      <div className='container mx-auto px-6 py-10 lg:py-20'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            id='why-philippines-title'
            className='font-display text-heading mb-4 text-3xl font-semibold'
          >
            {content.heading}
          </h2>
          <p>{content.description}</p>
        </div>

        <ul className='mt-10 grid gap-6 md:grid-cols-3 lg:mt-20'>
          {content.reasons.map((reason) => {
            const Icon = reasonIcons[reason.icon];

            return (
              <li
                key={reason.title}
                className='bg-card-surface rounded-xl p-8 shadow-sm lg:p-12'
              >
                <Icon
                  aria-hidden='true'
                  className='text-primary mb-3 text-3xl'
                  focusable='false'
                />
                <h3 className='font-display text-heading mb-2 text-2xl font-semibold'>
                  {reason.title}
                </h3>
                <p>{reason.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </MotionSection>
  );
}
