import { MotionSection } from '../../../components/layout/MotionSection';
import type { TalentProfileOverviewProps } from '../../../types/talent/sections.types';

export function TalentProfileOverview({ content }: TalentProfileOverviewProps) {
  const { description, heading, items } = content;

  return (
    <MotionSection
      aria-labelledby='talent-profile-overview-title'
      className='container mx-auto px-6 pb-10 lg:pb-20'
    >
      <div className='max-w-3xl'>
        <h2
          id='talent-profile-overview-title'
          className='font-display text-heading text-3xl font-semibold'
        >
          {heading}
        </h2>
        <p className='mt-4 text-base leading-7 lg:text-lg'>{description}</p>
      </div>

      <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((item) => (
          <li
            key={item.title}
            className='border-service-card-border bg-card-surface rounded-2xl border p-5 shadow-sm'
          >
            <h3 className='text-heading font-bold'>{item.title}</h3>
            <p className='mt-3 leading-7'>{item.description}</p>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
