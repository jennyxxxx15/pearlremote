export type HowItWorksStepIconName =
  | 'check'
  | 'headphones'
  | 'message'
  | 'phone'
  | 'users'
  | 'zap';

export type HowItWorksStepSide = 'left' | 'right';

export type HowItWorksHighlightIconName = 'currency' | 'security';

export type HowItWorksHighlightTone = 'dark' | 'muted' | 'primary';

export type HowItWorksHighlightWidth = 'narrow' | 'wide';

export type HowItWorksPageContent = {
  seo: {
    description: string;
    title: string;
  };
  hero: {
    badge: string;
    description: string;
    heading: string;
  };
  highlights: {
    heading: string;
    items: {
      backgroundImage?: string;
      description: string;
      icon?: HowItWorksHighlightIconName;
      title: string;
      tone: HowItWorksHighlightTone;
      width: HowItWorksHighlightWidth;
    }[];
  };
  steps: {
    description: string;
    icon: HowItWorksStepIconName;
    label: string;
    side: HowItWorksStepSide;
    title: string;
  }[];
};
