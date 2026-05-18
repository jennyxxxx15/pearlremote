'use client';

import Script from 'next/script';
import { useCallback, useMemo, useRef } from 'react';

type CalendlyInlineWidgetProps = {
  url: string;
};

type CalendlyWidgetOptions = {
  parentElement: HTMLElement;
  url: string;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: CalendlyWidgetOptions) => void;
    };
  }
}

const CALENDLY_WIDGET_SCRIPT =
  'https://assets.calendly.com/assets/external/widget.js';

function getThemedCalendlyUrl(url: string) {
  let calendlyUrl: URL;

  try {
    calendlyUrl = new URL(url);
  } catch {
    return url;
  }

  calendlyUrl.searchParams.set('background_color', 'ffffff');
  calendlyUrl.searchParams.set('primary_color', '4f378a');
  calendlyUrl.searchParams.set('text_color', '1d1b20');

  return calendlyUrl.toString();
}

export function CalendlyInlineWidget({ url }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const themedUrl = useMemo(() => getThemedCalendlyUrl(url), [url]);

  const initializeCalendly = useCallback(() => {
    const parentElement = containerRef.current;

    if (!parentElement || !window.Calendly) {
      return;
    }

    parentElement.replaceChildren();
    window.Calendly.initInlineWidget({
      parentElement,
      url: themedUrl,
    });
  }, [themedUrl]);

  return (
    <section aria-label='Book a discovery call' className='rounded-2xl'>
      <div
        ref={containerRef}
        className='bg-contact-input-surface border-contact-input-border h-180 min-w-80 overflow-hidden rounded-xl border'
      />

      <Script
        src={CALENDLY_WIDGET_SCRIPT}
        strategy='afterInteractive'
        onReady={initializeCalendly}
      />
    </section>
  );
}
