import type { HowItWorksPageContent } from './content.types';

export type HowItWorksProcessProps = {
  content: Pick<HowItWorksPageContent, 'hero' | 'steps'>;
};

export type HowItWorksHighlightsProps = {
  content: HowItWorksPageContent['highlights'];
};

export type HowItWorksCtaProps = {
  content: HowItWorksPageContent['cta'];
};
