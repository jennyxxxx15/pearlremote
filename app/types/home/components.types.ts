import type { IconType } from 'react-icons';

export type CoreServiceCardProps = {
  description: string;
  featured?: boolean;
  icon: IconType;
  title: string;
  wide?: boolean;
};

export type PopularRoleCardProps = {
  actionLabel: string;
  badge?: string | undefined;
  description: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
};

export type TestimonialCardProps = {
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
};
