import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { HiCheckBadge } from 'react-icons/hi2';
import { PiLightningBold } from 'react-icons/pi';
import { TbUserSearch } from 'react-icons/tb';
import { MotionSection } from '../../../components/layout/MotionSection';
import { Badge } from '../../../components/ui/Badge';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import type { HomeHeroProps } from '../../../types/home/sections.types';

const benefitIcons = {
  check: FaRegCircleCheck,
  lightning: PiLightningBold,
  location: GrLocation,
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <MotionSection
      aria-labelledby='home-hero-title'
      className='container mx-auto flex flex-col items-center justify-between gap-12 px-6 py-10 lg:flex-row lg:py-20'
    >
      <div className='flex flex-1 flex-col gap-4 lg:gap-6'>
        <Badge
          icon={
            <HiCheckBadge
              aria-hidden='true'
              className='text-base'
              focusable='false'
            />
          }
        >
          {content.badge}
        </Badge>
        <h1
          id='home-hero-title'
          className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
        >
          {content.heading.prefix}{' '}
          <span className='text-primary'>{content.heading.highlight}</span>
        </h1>
        <p className='text-lg'>{content.description}</p>
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
          <ButtonLink
            href='/services'
            variant='black'
            className='text-center shadow-none!'
          >
            {content.actions.primary.label}
          </ButtonLink>
          <ButtonLink
            href='/contact'
            variant='white'
            className='text-center shadow-none!'
          >
            {content.actions.secondary.label}
          </ButtonLink>
        </div>
        <div className='divider hidden lg:block' />
        <ol className='hidden items-center gap-6 text-xs font-semibold lg:flex'>
          {content.benefits.map(({ icon, label }) => {
            const Icon = benefitIcons[icon];

            return (
              <li key={label} className='flex items-center gap-1'>
                <Icon
                  aria-hidden='true'
                  className='text-primary text-sm'
                  focusable='false'
                />
                {label}
              </li>
            );
          })}
        </ol>
      </div>
      <figure
        aria-label={content.image.alt}
        className='relative h-48 w-full overflow-hidden rounded-4xl lg:h-125 lg:flex-1'
      >
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes='(max-width: 768px) 100vw, 50vw'
          className='object-cover'
        />
        <figcaption className='absolute right-6 bottom-6 left-6 hidden rounded-xl bg-white p-4 opacity-90 shadow-2xl lg:block'>
          <div className='flex items-center gap-4'>
            <div
              aria-hidden='true'
              className='bg-primary flex h-12 w-12 items-center justify-center rounded-full'
            >
              <TbUserSearch
                aria-hidden='true'
                className='text-xl font-bold text-white'
                focusable='false'
              />
            </div>
            <div>
              <p className='text-xs font-semibold'>
                {content.mediaCard.eyebrow}
              </p>
              <div className='text-heading font-bold'>
                {content.mediaCard.title}
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </MotionSection>
  );
}
