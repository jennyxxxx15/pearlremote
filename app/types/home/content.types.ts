export type HomeBenefitIconName = 'check' | 'lightning' | 'location';

export type HomeProcessStepIconName = 'chat' | 'launch' | 'staff';

export type HomeCoreServiceIconName =
  | 'admin'
  | 'commerce'
  | 'computer'
  | 'social'
  | 'support';

export type HomeWhyChooseUsIconName = 'check' | 'savings' | 'shield' | 'speed';

export type HomePageContent = {
  seo: {
    description: string;
    title: string;
  };
  hero: HomeHeroContent;
  howItWorks: HomeHowItWorksContent;
  coreServices: HomeCoreServicesContent;
  popularRoles: HomePopularRolesContent;
  testimonials: HomeTestimonialsContent;
  whyChooseUs: HomeWhyChooseUsContent;
};

export type HomeHeroContent = {
  actions: {
    primary: {
      label: string;
    };
    secondary: {
      label: string;
    };
  };
  badge: string;
  benefits: {
    icon: HomeBenefitIconName;
    label: string;
  }[];
  description: string;
  heading: {
    highlight: string;
    prefix: string;
  };
  image: {
    alt: string;
    src: string;
  };
  mediaCard: {
    eyebrow: string;
    title: string;
  };
};

export type HomeHowItWorksContent = {
  description: string;
  heading: string;
  steps: {
    description: string;
    icon: HomeProcessStepIconName;
    title: string;
  }[];
};

export type HomeCoreServicesContent = {
  action: {
    href: string;
    label: string;
  };
  description: string;
  heading: string;
  items: {
    description: string;
    featured?: boolean;
    icon: HomeCoreServiceIconName;
    title: string;
  }[];
};

export type HomeWhyChooseUsContent = {
  heading: string;
  image: {
    alt: string;
    src: string;
  };
  reasons: {
    description: string;
    icon: HomeWhyChooseUsIconName;
    title: string;
  }[];
};

export type HomePopularRolesContent = {
  actionLabel: string;
  description: string;
  heading: string;
  items: {
    badge?: string;
    description: string;
    image: {
      alt: string;
      src: string;
    };
    title: string;
  }[];
};

export type HomeTestimonialsContent = {
  description: string;
  heading: string;
  items: {
    author: {
      image: {
        alt: string;
        src: string;
      };
      name: string;
      role: string;
    };
    quote: string;
    rating: number;
  }[];
};
