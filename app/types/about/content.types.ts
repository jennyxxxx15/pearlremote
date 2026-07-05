import { HomeFinalCtaContent } from '../home/content.types';

export type AboutPageContent = {
  edge: AboutEdgeContent;
  seo: {
    description: string;
    title: string;
  };
  hero: AboutHeroContent;
  philippines: AboutPhilippinesContent;
  finalCta: HomeFinalCtaContent;
};

export type AboutPhilippinesIconName = 'handshake' | 'language' | 'technology';

export type AboutHeroContent = {
  badge: string;
  description: string;
  heading: string;
  image: {
    alt: string;
    src: string;
  };
  mediaCard: {
    title: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
};

export type AboutPhilippinesContent = {
  description: string;
  heading: string;
  reasons: {
    description: string;
    icon: AboutPhilippinesIconName;
    title: string;
  }[];
};

export type AboutEdgeIconName =
  | 'integration'
  | 'retention'
  | 'speed'
  | 'support';

export type AboutEdgeContent = {
  description: string;
  featured: {
    description: string;
    image: {
      alt: string;
      src: string;
    };
    proofPoints: string[];
    title: string;
  };
  heading: string;
  items: {
    description: string;
    icon: AboutEdgeIconName;
    title: string;
  }[];
};
