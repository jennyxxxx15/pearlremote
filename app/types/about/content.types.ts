export type AboutPageContent = {
  seo: {
    description: string;
    title: string;
  };
  hero: AboutHeroContent;
  philippines: AboutPhilippinesContent;
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
