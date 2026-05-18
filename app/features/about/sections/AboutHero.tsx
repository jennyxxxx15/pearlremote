import Image from 'next/image';
import { MotionSection } from '../../../components/layout/MotionSection';
import { Badge } from '../../../components/ui/Badge';
import type { AboutHeroProps } from '../../../types/about/sections.types';

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <MotionSection
      aria-labelledby='about-hero-title'
      className='container mx-auto flex flex-col items-center justify-between gap-12 px-6 py-10 lg:flex-row lg:py-20'
    >
      <div className='flex flex-1 flex-col gap-4 lg:gap-6'>
        <Badge>{content.badge}</Badge>
        <h1
          id='about-hero-title'
          className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
        >
          {content.heading}
        </h1>
        <p className='max-w-2xl text-lg'>{content.description}</p>
        <dl className='mt-4 grid grid-cols-2 gap-6 sm:max-w-md lg:mt-6 lg:gap-14'>
          {content.stats.map((stat) => (
            <div key={stat.label} className='flex flex-col gap-1'>
              <dt className='text-sm font-semibold tracking-[0.12em] text-zinc-600 uppercase'>
                {stat.label}
              </dt>
              <dd className='font-display text-primary text-3xl font-semibold'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className='relative h-64 w-full overflow-hidden rounded-4xl sm:h-80 lg:h-125 lg:flex-1'>
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes='(max-width: 768px) 100vw, 50vw'
          className='object-cover'
        />
        <figcaption className='bg-footer-surface text-primary absolute right-4 bottom-4 left-4 rounded-xl p-4 text-sm font-semibold shadow lg:right-6 lg:bottom-6 lg:left-auto lg:p-6 lg:text-base'>
          {content.mediaCard.title}
        </figcaption>
      </figure>
    </MotionSection>
  );
}
