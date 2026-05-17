import type { ElementType } from 'react';
import { MdCurrencyExchange, MdOutlineSecurity } from 'react-icons/md';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { HowItWorksHighlightIconName } from '../../../types/how-it-works/content.types';
import type { HowItWorksHighlightsProps } from '../../../types/how-it-works/sections.types';

const highlightIcons: Record<HowItWorksHighlightIconName, ElementType> = {
  currency: MdCurrencyExchange,
  security: MdOutlineSecurity,
};

const tileToneClasses = {
  dark: {
    body: 'bg-how-it-works-highlight-dark text-how-it-works-highlight-dark-copy',
    heading: 'text-how-it-works-highlight-dark-heading',
    icon: 'text-how-it-works-highlight-dark-heading',
  },
  muted: {
    body: 'bg-how-it-works-highlight-muted text-how-it-works-highlight-muted-copy',
    heading: 'text-how-it-works-highlight-muted-heading',
    icon: 'text-primary',
  },
  primary: {
    body: 'bg-how-it-works-highlight-primary text-how-it-works-highlight-primary-copy',
    heading: 'text-how-it-works-highlight-primary-copy',
    icon: 'text-how-it-works-highlight-primary-copy',
  },
};

export function HowItWorksHighlights({ content }: HowItWorksHighlightsProps) {
  return (
    <MotionSection
      aria-labelledby='how-it-works-highlights-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <h2 id='how-it-works-highlights-title' className='sr-only'>
        {content.heading}
      </h2>

      <ul className='grid gap-6 lg:grid-cols-3'>
        {content.items.map((item) => {
          const toneClasses = tileToneClasses[item.tone];
          const Icon = item.icon ? highlightIcons[item.icon] : null;
          const isWide = item.width === 'wide';

          return (
            <li
              key={item.title}
              className={`${toneClasses.body} ${
                isWide
                  ? 'flex min-h-80 flex-col justify-end lg:col-span-2'
                  : 'lg:col-span-1'
              } rounded-4xl bg-cover bg-center p-8 bg-blend-soft-light lg:p-12`}
              style={
                item.backgroundImage
                  ? { backgroundImage: `url(${item.backgroundImage})` }
                  : undefined
              }
            >
              {Icon && (
                <Icon
                  aria-hidden='true'
                  className={`${toneClasses.icon} mb-8 text-4xl`}
                  focusable='false'
                />
              )}

              <h3
                className={`${toneClasses.heading} font-display mb-2 text-2xl font-semibold`}
              >
                {item.title}
              </h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </MotionSection>
  );
}
