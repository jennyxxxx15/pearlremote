import Image from 'next/image';
import { MotionSection } from '../../../components/layout/MotionSection';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import type { TalentProfileHeroProps } from '../../../types/talent/sections.types';

export function TalentProfileHero({ content }: TalentProfileHeroProps) {
  const { actions, badges, description, eyebrow, heading, image } = content;

  return (
    <MotionSection
      aria-labelledby='talent-profile-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='border-button-border bg-card-surface grid gap-8 rounded-4xl border p-5 shadow-sm sm:p-6 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12 lg:p-8'>
        <figure className='bg-about-leadership-image-surface relative overflow-hidden rounded-3xl'>
          <div className='relative aspect-[4/5]'>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes='(max-width: 1024px) 100vw, 36vw'
              className='object-cover object-top'
            />
          </div>
          <figcaption className='absolute right-4 bottom-4 left-4'>
            <span className='bg-card-surface text-primary inline-flex rounded-full px-4 py-2 text-sm font-bold shadow-sm'>
              Ecommerce Support VA
            </span>
          </figcaption>
        </figure>

        <div>
          <p className='text-primary mb-3 text-sm font-bold tracking-wide uppercase'>
            {eyebrow}
          </p>
          <h1
            id='talent-profile-title'
            className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
          >
            {heading}
          </h1>
          <p className='mt-5 text-lg leading-8'>{description}</p>

          <ul
            aria-label='Mel profile highlights'
            className='mt-6 flex flex-wrap gap-2'
          >
            {badges.map((badge) => (
              <li
                key={badge}
                className='bg-primary-surface text-primary rounded-full px-3 py-1 text-sm font-semibold'
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <ButtonLink
              href={actions.primary.href}
              className='w-full text-center sm:w-auto'
              variant='primary'
            >
              {actions.primary.label}
            </ButtonLink>
            <ButtonLink
              href={actions.secondary.href}
              className='w-full text-center sm:w-auto'
              variant='white'
            >
              {actions.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
