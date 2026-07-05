'use client';

import { useRef } from 'react';
import { BiTachometer } from 'react-icons/bi';
import { GrShield } from 'react-icons/gr';
import {
  IoArrowBack,
  IoArrowForward,
  IoCheckmarkDoneSharp,
} from 'react-icons/io5';
import { PiPiggyBank } from 'react-icons/pi';
import type {
  HomeWhyChooseUsContent,
  HomeWhyChooseUsIconName,
} from '../../../types/home/content.types';

const reasonIcons: Record<
  HomeWhyChooseUsIconName,
  typeof IoCheckmarkDoneSharp
> = {
  check: IoCheckmarkDoneSharp,
  savings: PiPiggyBank,
  shield: GrShield,
  speed: BiTachometer,
};

function ComprehensiveScreeningVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#F4F0FF' />
      <circle cx='396' cy='38' r='52' fill='#E3D7FF' opacity='0.85' />
      <circle cx='80' cy='145' r='58' fill='#D9F4EA' opacity='0.8' />
      <path
        d='M112 44C112 33.5 120.5 25 131 25H307C317.5 25 326 33.5 326 44V148C326 158.5 317.5 167 307 167H131C120.5 167 112 158.5 112 148V44Z'
        fill='white'
      />
      <path
        d='M112 44C112 33.5 120.5 25 131 25H307C317.5 25 326 33.5 326 44V148C326 158.5 317.5 167 307 167H131C120.5 167 112 158.5 112 148V44Z'
        fill='none'
        stroke='#6750A4'
        strokeWidth='4'
      />
      <path
        d='M148 58H252'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M148 86H290'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <path
        d='M148 112H250'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <path
        d='M148 138H220'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <circle cx='334' cy='110' r='43' fill='#6750A4' />
      <path
        d='M313 109.5L328 124L355 93'
        fill='none'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='9'
      />
      <circle cx='139' cy='38' r='9' fill='#B7A9DE' />
      <circle cx='166' cy='38' r='9' fill='#B7A9DE' />
      <circle cx='193' cy='38' r='9' fill='#B7A9DE' />
      <path
        d='M342 54L369 27L396 54'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='7'
      />
      <path
        d='M369 29V78'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeWidth='7'
      />
    </svg>
  );
}

type WhyChooseUsSliderProps = {
  reasons: HomeWhyChooseUsContent['reasons'];
};

export function WhyChooseUsSlider({ reasons }: WhyChooseUsSliderProps) {
  const sliderRef = useRef<HTMLOListElement>(null);

  function scrollCards(direction: 'back' | 'forward') {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector('li');
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;

    slider.scrollBy({
      behavior: 'smooth',
      left: direction === 'forward' ? cardWidth + 24 : -(cardWidth + 24),
    });
  }

  return (
    <div className='relative mt-10 min-w-0 pt-14 lg:mt-12 lg:pt-0'>
      <button
        type='button'
        aria-label='Previous reason'
        className='border-button-border bg-card-surface text-heading hover:bg-primary-surface focus-visible:ring-primary absolute top-0 right-14 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:top-1/2 lg:right-auto lg:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2'
        onClick={() => scrollCards('back')}
      >
        <IoArrowBack aria-hidden='true' focusable='false' />
      </button>

      <ol
        ref={sliderRef}
        className='flex w-[calc(100%+1.5rem)] max-w-none snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto scroll-smooth pb-2 lg:w-full lg:max-w-full'
      >
        {reasons.map(({ description, icon, title }, index) => {
          const Icon = reasonIcons[icon];
          const isFirstReason = index === 0;

          return (
            <li
              key={title}
              className='bg-card-surface text-foreground flex min-w-[82%] snap-start flex-col self-stretch overflow-hidden rounded-3xl shadow-sm sm:min-w-[24rem] lg:min-w-[calc((100%_-_3rem)_/_3)]'
            >
              <div className='bg-primary-surface flex h-36 items-center justify-center'>
                {isFirstReason ? (
                  <ComprehensiveScreeningVisual />
                ) : (
                  <Icon
                    aria-hidden='true'
                    className='text-primary text-4xl'
                    focusable='false'
                  />
                )}
              </div>
              <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-heading mb-2 text-lg font-bold'>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <button
        type='button'
        aria-label='Next reason'
        className='border-button-border bg-card-surface text-heading hover:bg-primary-surface focus-visible:ring-primary absolute top-0 right-0 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2'
        onClick={() => scrollCards('forward')}
      >
        <IoArrowForward aria-hidden='true' focusable='false' />
      </button>
    </div>
  );
}
