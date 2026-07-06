'use client';

import { useRef, type ReactElement } from 'react';
import { BiTachometer } from 'react-icons/bi';
import { GrShield } from 'react-icons/gr';
import {
  IoArrowBack,
  IoArrowForward,
  IoCheckmarkDoneSharp,
} from 'react-icons/io5';
import { PiPiggyBank } from 'react-icons/pi';
import { PeekSlider } from '../../../components/home/PeekSlider';
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

function RecruitmentOnboardingVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#EEF7FF' />
      <path
        d='M78 142C111 92 157 66 216 64C275 62 324 87 386 132'
        fill='none'
        stroke='#BFE2FF'
        strokeLinecap='round'
        strokeWidth='28'
      />
      <circle
        cx='154'
        cy='76'
        r='37'
        fill='white'
        stroke='#1877B8'
        strokeWidth='4'
      />
      <path
        d='M136 116C140 98 147 91 154 91C161 91 168 98 172 116'
        fill='none'
        stroke='#1877B8'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <circle cx='154' cy='66' r='12' fill='#1877B8' />
      <path
        d='M228 56H341C351.5 56 360 64.5 360 75V126C360 136.5 351.5 145 341 145H228C217.5 145 209 136.5 209 126V75C209 64.5 217.5 56 228 56Z'
        fill='white'
        stroke='#6750A4'
        strokeWidth='4'
      />
      <path
        d='M236 84H300'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M236 112H329'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <path
        d='M322 80L340 98L322 116'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='7'
      />
      <path
        d='M282 98H338'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeWidth='7'
      />
    </svg>
  );
}

function KpiTrackingVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#F5F7FB' />
      <circle cx='88' cy='42' r='47' fill='#D9F4EA' />
      <circle cx='410' cy='142' r='53' fill='#E3D7FF' />
      <path
        d='M107 147H373'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='6'
      />
      <rect x='128' y='89' width='42' height='58' rx='8' fill='#20A66A' />
      <rect x='203' y='65' width='42' height='82' rx='8' fill='#1877B8' />
      <rect x='278' y='42' width='42' height='105' rx='8' fill='#6750A4' />
      <path
        d='M127 66L192 93L260 55L332 80'
        fill='none'
        stroke='#111827'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='5'
      />
      <circle
        cx='127'
        cy='66'
        r='9'
        fill='white'
        stroke='#111827'
        strokeWidth='4'
      />
      <circle
        cx='192'
        cy='93'
        r='9'
        fill='white'
        stroke='#111827'
        strokeWidth='4'
      />
      <circle
        cx='260'
        cy='55'
        r='9'
        fill='white'
        stroke='#111827'
        strokeWidth='4'
      />
      <circle
        cx='332'
        cy='80'
        r='9'
        fill='white'
        stroke='#111827'
        strokeWidth='4'
      />
    </svg>
  );
}

function RegularCheckInsVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#F2FBF7' />
      <path
        d='M91 56C91 45.5 99.5 37 110 37H249C259.5 37 268 45.5 268 56V104C268 114.5 259.5 123 249 123H151L113 150V123H110C99.5 123 91 114.5 91 104V56Z'
        fill='white'
        stroke='#20A66A'
        strokeLinejoin='round'
        strokeWidth='4'
      />
      <path
        d='M211 73H334C344.5 73 353 81.5 353 92V130C353 140.5 344.5 149 334 149H302L270 167V149H211C200.5 149 192 140.5 192 130V92C192 81.5 200.5 73 211 73Z'
        fill='#F8F4FF'
        stroke='#6750A4'
        strokeLinejoin='round'
        strokeWidth='4'
      />
      <circle cx='132' cy='81' r='10' fill='#20A66A' />
      <circle cx='174' cy='81' r='10' fill='#20A66A' />
      <circle cx='216' cy='81' r='10' fill='#20A66A' />
      <path
        d='M230 111L251 131L292 91'
        fill='none'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='8'
      />
      <circle cx='371' cy='51' r='26' fill='#D9F4EA' />
      <path
        d='M358 51L368 61L385 42'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='6'
      />
    </svg>
  );
}

function AccountManagementVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#FFF8EC' />
      <circle cx='98' cy='58' r='45' fill='#FBE0B5' />
      <circle cx='392' cy='134' r='49' fill='#E3D7FF' />
      <rect
        x='126'
        y='34'
        width='229'
        height='118'
        rx='20'
        fill='white'
        stroke='#6750A4'
        strokeWidth='4'
      />
      <circle cx='186' cy='82' r='28' fill='#6750A4' />
      <path
        d='M165 130C170 109 178 101 186 101C194 101 202 109 207 130'
        fill='none'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M245 69H318'
        stroke='#C2821D'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M245 96H317'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <path
        d='M245 121H297'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <circle cx='335' cy='130' r='25' fill='#20A66A' />
      <path
        d='M323 130L332 139L348 121'
        fill='none'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='6'
      />
    </svg>
  );
}

function ContinuousCoachingVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#F3F6FF' />
      <path
        d='M105 129C129 93 163 75 207 75C251 75 284 92 324 126'
        fill='none'
        stroke='#D8E2FF'
        strokeLinecap='round'
        strokeWidth='32'
      />
      <circle
        cx='169'
        cy='82'
        r='33'
        fill='white'
        stroke='#1877B8'
        strokeWidth='4'
      />
      <path
        d='M151 126C155 108 162 101 169 101C176 101 183 108 187 126'
        fill='none'
        stroke='#1877B8'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M256 45H348C359 45 368 54 368 65V111C368 122 359 131 348 131H309L276 154V131H256C245 131 236 122 236 111V65C236 54 245 45 256 45Z'
        fill='white'
        stroke='#6750A4'
        strokeLinejoin='round'
        strokeWidth='4'
      />
      <path
        d='M267 78H337'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M267 104H321'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='7'
      />
      <path
        d='M105 55L123 73L159 37'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='8'
      />
    </svg>
  );
}

function FastReplacementVisual() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      viewBox='0 0 480 180'
    >
      <rect width='480' height='180' fill='#F7F3FF' />
      <circle cx='110' cy='128' r='50' fill='#D9F4EA' />
      <circle cx='377' cy='53' r='48' fill='#E3D7FF' />
      <circle
        cx='169'
        cy='85'
        r='35'
        fill='white'
        stroke='#B7A9DE'
        strokeWidth='4'
      />
      <path
        d='M147 135C152 113 161 104 169 104C177 104 186 113 191 135'
        fill='none'
        stroke='#B7A9DE'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M219 88H312'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M284 60L316 88L284 116'
        fill='none'
        stroke='#6750A4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='8'
      />
      <circle
        cx='346'
        cy='85'
        r='35'
        fill='white'
        stroke='#20A66A'
        strokeWidth='4'
      />
      <path
        d='M324 135C329 113 338 104 346 104C354 104 363 113 368 135'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeWidth='8'
      />
      <path
        d='M329 82L341 94L364 69'
        fill='none'
        stroke='#20A66A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='7'
      />
    </svg>
  );
}

const reasonVisuals: Record<string, () => ReactElement> = {
  'Account Management': AccountManagementVisual,
  'Comprehensive Screening': ComprehensiveScreeningVisual,
  'Continuous Coaching': ContinuousCoachingVisual,
  'Fast Replacement Support': FastReplacementVisual,
  'KPI Tracking & Reviews': KpiTrackingVisual,
  'Recruitment & Onboarding': RecruitmentOnboardingVisual,
  'Regular Check-ins': RegularCheckInsVisual,
};

type WhyChooseUsSliderProps = {
  reasons: HomeWhyChooseUsContent['reasons'];
};

export function WhyChooseUsSlider({ reasons }: WhyChooseUsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

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
    <div className='relative mt-10 min-w-0 lg:mt-12'>
      <button
        type='button'
        aria-label='Previous reason'
        className='bg-card-surface hover:bg-primary-surface border-button-border focus-visible:ring-primary text-heading absolute top-0 right-14 z-10 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:top-1/2 lg:right-auto lg:left-0 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2 2xl:-left-14 2xl:translate-x-0'
        onClick={() => scrollCards('back')}
      >
        <IoArrowBack aria-hidden='true' focusable='false' />
      </button>

      <PeekSlider
        className='scroll-smooth sm:overflow-x-auto'
        listClassName='pb-2'
        scrollRef={sliderRef}
      >
        {reasons.map(({ description, icon, title }) => {
          const Icon = reasonIcons[icon];
          const Visual = reasonVisuals[title];

          return (
            <li
              key={title}
              className='bg-card-surface text-foreground flex min-w-[82%] snap-start flex-col self-stretch overflow-hidden rounded-3xl shadow-sm sm:min-w-[24rem] lg:min-w-[calc((100%_-_3rem)_/_3)]'
            >
              <div className='bg-primary-surface flex h-36 items-center justify-center'>
                {Visual ? (
                  <Visual />
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
      </PeekSlider>

      <button
        type='button'
        aria-label='Next reason'
        className='bg-card-surface hover:bg-primary-surface border-button-border focus-visible:ring-primary text-heading absolute top-0 right-0 z-10 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:top-1/2 lg:flex lg:translate-x-1/2 lg:-translate-y-1/2 2xl:-right-14 2xl:translate-x-0'
        onClick={() => scrollCards('forward')}
      >
        <IoArrowForward aria-hidden='true' focusable='false' />
      </button>
    </div>
  );
}
