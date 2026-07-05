import Image from 'next/image';
import { MotionSection } from '../../../components/layout/MotionSection';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import type { TalentProps } from '../../../types/home/sections.types';

export function Talent({ content }: TalentProps) {
  const { actions, description, eyebrow, heading, member } = content;

  return (
    <MotionSection
      aria-labelledby='talent-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='bg-card-surface border-button-border grid gap-8 rounded-4xl border p-5 shadow-sm sm:p-6 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10 lg:p-8 xl:gap-12'>
        <figure className='bg-about-leadership-image-surface relative overflow-hidden rounded-3xl'>
          <div className='relative aspect-4/5'>
            <Image
              src={member.image.src}
              alt={member.image.alt}
              fill
              sizes='(max-width: 1024px) 100vw, 36vw'
              loading='eager'
              className='object-cover object-top'
            />
          </div>
          <figcaption className='absolute right-4 bottom-4 left-4'>
            <span className='bg-card-surface text-primary inline-flex rounded-full px-4 py-2 text-sm font-bold shadow-sm'>
              {member.imageBadge}
            </span>
          </figcaption>
        </figure>

        <div className='py-1 lg:py-4'>
          <p className='text-primary mb-3 text-sm font-bold tracking-wide uppercase'>
            {eyebrow}
          </p>
          <div className='max-w-3xl'>
            <h2
              id='talent-title'
              className='font-display text-heading text-3xl font-semibold lg:text-4xl'
            >
              {heading}
            </h2>
            <p className='mt-3 text-base leading-7 lg:text-lg'>{description}</p>
          </div>

          <div className='mt-6'>
            <h3 className='font-display text-heading text-3xl font-semibold'>
              {member.name}
            </h3>
            <p className='text-primary mt-1 font-semibold'>{member.role}</p>

            <ul
              aria-label={`${member.name} credibility badges`}
              className='mt-4 flex flex-wrap gap-2'
            >
              {member.badges.map((badge) => (
                <li
                  key={badge}
                  className='bg-primary-surface text-primary rounded-full px-3 py-1 text-sm font-semibold'
                >
                  {badge}
                </li>
              ))}
            </ul>

            <p className='mt-5 max-w-2xl leading-7'>{member.summary}</p>
          </div>

          <ul className='mt-6 grid gap-3 md:grid-cols-3'>
            {member.skills.map((skill) => (
              <li
                key={skill.title}
                className='bg-page-surface border-service-card-border rounded-2xl border p-4'
              >
                <h4 className='text-heading font-bold'>{skill.title}</h4>
                <p className='mt-2 text-sm leading-6'>{skill.description}</p>
              </li>
            ))}
          </ul>

          <div className='mt-7'>
            <ButtonLink
              href={actions.primary.href}
              className='inline-flex w-full items-center justify-center text-center leading-snug sm:w-auto'
              variant='primary'
            >
              {actions.primary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
