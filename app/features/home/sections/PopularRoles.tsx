import { PopularRoleCard } from '../../../components/home/PopularRoleCard';
import { PeekSlider } from '../../../components/home/PeekSlider';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { PopularRolesProps } from '../../../types/home/sections.types';

export function PopularRoles({ content }: PopularRolesProps) {
  return (
    <MotionSection
      aria-labelledby='popular-roles-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <h2
        id='popular-roles-title'
        className='font-display text-heading mb-4 text-center text-3xl font-semibold'
      >
        {content.heading}
      </h2>
      <p className='text-center'>{content.description}</p>
      <PeekSlider
        ariaLabel={content.heading}
        className='mt-10 lg:mt-20'
        listClassName='sm:grid sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4'
      >
        {content.items.map((role) => (
          <PopularRoleCard
            key={role.title}
            actionLabel={content.actionLabel}
            badge={role.badge}
            description={role.description}
            image={role.image}
            title={role.title}
          />
        ))}
      </PeekSlider>
    </MotionSection>
  );
}
