export type ContactPageContent = {
  hero: ContactHeroContent;
  inquiry: ContactInquiryContent;
  seo: {
    description: string;
    title: string;
  };
};

export type ContactHeroContent = {
  description: string;
  heading: string;
};

export type ContactFieldType = 'email' | 'textarea' | 'text';

export type ContactInquiryContent = {
  description: string;
  details: {
    description: string;
    heading: string;
    items: {
      label: string;
      value: string;
    }[];
    testimonial?: {
      author: string;
      image: {
        alt: string;
        src: string;
      };
      quote: string;
      role: string;
    };
  };
  fields: {
    id: string;
    label: string;
    name: string;
    placeholder: string;
    type: ContactFieldType;
  }[];
  heading: string;
  submitLabel: string;
};
