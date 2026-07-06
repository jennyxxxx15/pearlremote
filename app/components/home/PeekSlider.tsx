import type { ReactNode, Ref } from 'react';

type PeekSliderProps = {
  ariaLabel?: string;
  breakpoint?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  listClassName?: string;
  scrollRef?: Ref<HTMLDivElement>;
};

const wrapperBreakpointClasses = {
  lg: 'lg:mx-0 lg:overflow-visible lg:px-0',
  md: 'md:mx-0 md:overflow-visible md:px-0',
  sm: 'sm:mx-0 sm:overflow-visible sm:px-0',
};

const listBreakpointClasses = {
  lg: 'lg:after:hidden',
  md: 'md:after:hidden',
  sm: 'sm:after:hidden',
};

export function PeekSlider({
  ariaLabel,
  breakpoint = 'sm',
  children,
  className = '',
  listClassName = '',
  scrollRef,
}: PeekSliderProps) {
  return (
    <div
      ref={scrollRef}
      className={`-mx-6 scrollbar-none overflow-x-auto px-6 ${wrapperBreakpointClasses[breakpoint]} ${className}`}
    >
      <ol
        aria-label={ariaLabel}
        className={`flex snap-x snap-mandatory items-stretch gap-6 after:block after:min-w-0.5 ${listBreakpointClasses[breakpoint]} ${listClassName}`}
      >
        {children}
      </ol>
    </div>
  );
}
