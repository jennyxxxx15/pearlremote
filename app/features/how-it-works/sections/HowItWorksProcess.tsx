import type { ElementType } from 'react';
import {
  FiCheckSquare,
  FiHeadphones,
  FiMessageSquare,
  FiPhoneCall,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { MotionSection } from '../../../components/layout/MotionSection';
import { Badge } from '../../../components/ui/Badge';
import type { HowItWorksStepIconName } from '../../../types/how-it-works/content.types';
import type { HowItWorksProcessProps } from '../../../types/how-it-works/sections.types';

const stepIcons: Record<HowItWorksStepIconName, ElementType> = {
  check: FiCheckSquare,
  headphones: FiHeadphones,
  message: FiMessageSquare,
  phone: FiPhoneCall,
  users: FiUsers,
  zap: FiZap,
};

export function HowItWorksProcess({ content }: HowItWorksProcessProps) {
  return (
    <MotionSection
      aria-labelledby='how-it-works-process-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 text-center lg:max-w-180 lg:gap-6'>
        <Badge size='small'>{content.hero.badge}</Badge>
        <h1
          id='how-it-works-process-title'
          className='font-display text-heading text-4xl leading-tight font-bold lg:text-5xl'
        >
          {content.hero.heading}
        </h1>
        <p className='text-lg'>{content.hero.description}</p>
      </div>

      <div className='relative mt-24'>
        <div
          aria-hidden='true'
          className='absolute top-0 left-6 h-full w-px md:left-1/2 md:-translate-x-1/2'
        >
          <span className='bg-primary absolute top-0 left-1/2 size-2 -translate-x-1/2 rounded-full' />
          <span className='bg-primary absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rounded-full' />
          <span className='bg-divider block h-full w-px' />
        </div>

        <ol className='space-y-20'>
          {content.steps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            const isLeft = step.side === 'left';
            const stepNumber = index + 1;

            return (
              <li
                key={step.title}
                className='relative grid gap-8 md:grid-cols-[1fr_88px_1fr] md:items-start'
              >
                <div
                  aria-hidden='true'
                  className='bg-primary shadow-primary/25 text-button-white absolute top-8 left-6 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full text-sm font-bold shadow-lg md:hidden'
                >
                  {stepNumber}
                </div>

                <div
                  className={
                    isLeft ? 'ml-16 md:ml-0 md:text-right' : 'hidden md:block'
                  }
                >
                  {isLeft && (
                    <StepContent
                      align='right'
                      description={step.description}
                      Icon={Icon}
                      label={step.label}
                      title={step.title}
                    />
                  )}
                </div>

                <div
                  aria-hidden='true'
                  className='relative z-10 hidden justify-center md:flex md:pt-8'
                >
                  <div className='bg-primary shadow-primary/25 text-button-white flex size-11 items-center justify-center rounded-full text-sm font-bold shadow-lg'>
                    {stepNumber}
                  </div>
                </div>

                <div className={!isLeft ? 'ml-16 md:ml-0' : 'hidden md:block'}>
                  {!isLeft && (
                    <StepContent
                      description={step.description}
                      Icon={Icon}
                      label={step.label}
                      title={step.title}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </MotionSection>
  );
}

function StepContent({
  label,
  title,
  description,
  Icon,
  align = 'left',
}: {
  label: string;
  title: string;
  description: string;
  Icon: ElementType;
  align?: 'left' | 'right';
}) {
  return (
    <div className={`flex ${align === 'right' ? 'md:justify-end' : ''}`}>
      <div className='max-w-sm'>
        <p
          className={`text-primary inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase ${
            align === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <Icon aria-hidden='true' className='size-4' focusable='false' />
          {label}
        </p>

        <h2 className='mt-4 text-2xl font-bold tracking-tight md:text-3xl'>
          {title}
        </h2>

        <p className='mt-4 max-w-sm text-sm leading-7 text-zinc-600 md:text-base'>
          {description}
        </p>
      </div>
    </div>
  );
}
