export type FooterSocialIconName = 'facebook' | 'instagram' | 'linkedin';

export type FooterContent = {
  brand: {
    description: string;
    href: string;
    label: string;
  };
  copyright: string;
  sections: {
    heading: string;
    links: {
      href: string;
      label: string;
    }[];
  }[];
  social: {
    heading: string;
    links: {
      href: string;
      icon: FooterSocialIconName;
      label: string;
    }[];
  };
};
