import { FaRegCircleCheck } from 'react-icons/fa6';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { TalentProfileFitProps } from '../../../types/talent/sections.types';

export function TalentProfileFit({ content }: TalentProfileFitProps) {
  const { heading, items } = content;

  return (
    <MotionSection
      aria-labelledby='talent-profile-fit-title'
      className='bg-section-surface'
    >
      <div className='container mx-auto px-6 py-10 lg:py-20'>
        <h2
          id='talent-profile-fit-title'
          className='font-display text-heading text-3xl font-semibold'
        >
          {heading}
        </h2>

        <ul className='mt-8 grid gap-4 lg:grid-cols-2'>
          {items.map((item) => (
            <li key={item} className='flex gap-4'>
              <div
                aria-hidden='true'
                className='bg-primary flex h-10 min-w-10 items-center justify-center rounded-full text-white'
              >
                <FaRegCircleCheck aria-hidden='true' focusable='false' />
              </div>
              <p className='pt-2 leading-7'>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
