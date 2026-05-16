import type {
  HomeCoreServicesContent,
  HomeHeroContent,
  HomeHowItWorksContent,
  HomePopularRolesContent,
  HomeTestimonialsContent,
  HomeWhyChooseUsContent,
} from './content.types';

export type HomeHeroProps = {
  content: HomeHeroContent;
};

export type HowItWorksProps = {
  content: HomeHowItWorksContent;
};

export type CoreServicesProps = {
  content: HomeCoreServicesContent;
};

export type WhyChooseUsProps = {
  content: HomeWhyChooseUsContent;
};

export type PopularRolesProps = {
  content: HomePopularRolesContent;
};

export type TestimonialsProps = {
  content: HomeTestimonialsContent;
};
