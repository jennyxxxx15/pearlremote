export type TalentProfilePageContent = {
  cta: TalentProfileCtaContent;
  fit: TalentProfileFitContent;
  hero: TalentProfileHeroContent;
  overview: TalentProfileOverviewContent;
  seo: {
    description: string;
    title: string;
  };
};

export type TalentProfileAction = {
  href: string;
  label: string;
};

export type TalentProfileHeroContent = {
  actions: {
    primary: TalentProfileAction;
    secondary: TalentProfileAction;
  };
  badges: string[];
  description: string;
  eyebrow: string;
  heading: string;
  image: {
    alt: string;
    src: string;
  };
};

export type TalentProfileOverviewContent = {
  description: string;
  heading: string;
  items: {
    description: string;
    title: string;
  }[];
};

export type TalentProfileFitContent = {
  heading: string;
  items: string[];
};

export type TalentProfileCtaContent = {
  action: TalentProfileAction;
  description: string;
  heading: string;
};
