import { HomeFinalCtaContent } from '../home/content.types';

export type ServiceOverviewItem = {
  badge: string;
  bestFor: {
    description: string;
    label: string;
  };
  capabilities: string[];
  description: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
};

export type ServicesPageContent = {
  seo: {
    description: string;
    title: string;
  };
  hero: {
    description: string;
    heading: string;
  };
  services: ServiceOverviewItem[];
  finalCta: HomeFinalCtaContent;
};
