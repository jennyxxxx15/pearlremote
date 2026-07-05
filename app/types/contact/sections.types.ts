import type {
  ContactHeroContent,
  ContactInquiryContent,
} from './content.types';
import type { TestimonialCardProps } from '../home/components.types';

export type ContactHeroProps = {
  content: ContactHeroContent;
};

export type ContactInquiryProps = {
  content: ContactInquiryContent;
  featuredTestimonial: TestimonialCardProps;
  testimonials: TestimonialCardProps[];
};
