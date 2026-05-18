import Image from 'next/image';
import type { ElementType } from 'react';
import { BsPatchCheck } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi2';
import { MdSpeed } from 'react-icons/md';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { AboutEdgeIconName } from '../../../types/about/content.types';
import type { AboutEdgeProps } from '../../../types/about/sections.types';

const edgeIcons: Record<AboutEdgeIconName, ElementType> = {
  integration: FaRegCheckCircle,
  retention: BsPatchCheck,
  speed: MdSpeed,
  support: HiShieldCheck,
};

export function AboutEdge({ content }: AboutEdgeProps) {
  const { description, featured, heading, items } = content;

  return (
    <MotionSection
      aria-labelledby='about-edge-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='max-w-3xl'>
        <h2
          id='about-edge-title'
          className='font-display text-heading text-2xl font-semibold lg:text-3xl'
        >
          {heading}
        </h2>
        <p className='mt-4 text-base lg:text-lg'>{description}</p>
      </div>

      <div className='lg:grid-cols-about-edge mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-rows-2 lg:gap-6'>
        <article className='bg-about-edge-featured-surface relative overflow-hidden rounded-xl p-6 text-white md:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-150 lg:p-12'>
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes='(max-width: 1024px) 100vw, 45vw'
            className='object-cover object-center opacity-45'
          />
          <div className='from-about-edge-featured-overlay via-about-edge-featured-overlay/70 to-about-edge-featured-surface/20 absolute inset-0 bg-linear-to-t' />
          <div className='relative flex min-h-96 flex-col justify-end md:min-h-110 lg:min-h-full'>
            <h3 className='font-display mb-3 text-2xl font-semibold lg:text-3xl'>
              {featured.title}
            </h3>
            <p className='text-about-edge-featured-copy max-w-xl text-base lg:text-lg'>
              {featured.description}
            </p>
            <ul className='mt-6 flex flex-col gap-2'>
              {featured.proofPoints.map((proofPoint) => (
                <li key={proofPoint} className='flex items-center gap-2'>
                  <FaRegCheckCircle
                    aria-hidden='true'
                    className='text-about-edge-proof-icon shrink-0'
                    focusable='false'
                  />
                  <span>{proofPoint}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {items.map((item, index) => {
          const Icon = edgeIcons[item.icon];
          const featuredSupport = index === 0;

          return (
            <article
              key={item.title}
              className={
                featuredSupport
                  ? 'bg-about-edge-support-surface text-about-edge-support-copy rounded-xl p-6 md:col-span-2 lg:p-10'
                  : 'bg-about-edge-card-surface text-about-edge-card-foreground flex min-h-60 flex-col justify-between rounded-xl p-6 lg:p-10'
              }
            >
              {featuredSupport ? (
                <div className='flex h-full flex-col gap-10 sm:flex-row sm:items-end sm:justify-between'>
                  <div className='max-w-2xl'>
                    <h3 className='font-display mb-2 text-2xl font-semibold'>
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <Icon
                    aria-hidden='true'
                    className='text-about-edge-support-icon text-5xl sm:text-6xl'
                    focusable='false'
                  />
                </div>
              ) : (
                <>
                  <Icon
                    aria-hidden='true'
                    className='text-about-edge-card-icon text-3xl'
                    focusable='false'
                  />
                  <div>
                    <h3 className='text-heading mb-2 text-lg font-semibold'>
                      {item.title}
                    </h3>
                    <p className='text-sm leading-6'>{item.description}</p>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
