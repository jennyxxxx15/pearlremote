import { PopularRoleCard } from '../../../components/home/PopularRoleCard';
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
      <div className='-mx-6 mt-10 scrollbar-none overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0 lg:mt-20'>
        <ol
          aria-label={content.heading}
          className='flex snap-x snap-mandatory items-stretch gap-6 after:block after:min-w-0.5 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:after:hidden lg:grid-cols-4'
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
        </ol>
      </div>
    </MotionSection>
  );
}
