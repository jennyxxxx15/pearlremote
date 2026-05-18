import { MotionSection } from '../../../components/layout/MotionSection';
import { ServiceOverviewCard } from '../components/ServiceOverviewCard';
import type { ServicesOverviewProps } from '../../../types/services/sections.types';

export function ServicesOverview({ content }: ServicesOverviewProps) {
  const { hero, services } = content;

  return (
    <MotionSection
      aria-labelledby='services-overview-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 text-center lg:max-w-180 lg:gap-6'>
        <h1
          id='services-overview-title'
          className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
        >
          {hero.heading}
        </h1>
        <p className='text-lg'>{hero.description}</p>
      </div>

      <div className='mt-10 flex flex-col gap-10 lg:mt-20 lg:gap-20'>
        {services.map((service, index) => (
          <ServiceOverviewCard
            inverted={index % 2 !== 0}
            key={service.title}
            service={service}
          />
        ))}
      </div>
    </MotionSection>
  );
}
