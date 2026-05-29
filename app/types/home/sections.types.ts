import type {
  HomeCoreServicesContent,
  HomeFaqsContent,
  HomeFinalCtaContent,
  HomeHeroContent,
  HomeHowItWorksContent,
  HomePopularRolesContent,
  HomeTalentContent,
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

export type TalentProps = {
  content: HomeTalentContent;
};

export type TestimonialsProps = {
  content: HomeTestimonialsContent;
};

export type FaqsProps = {
  content: HomeFaqsContent;
};

export type FinalCtaProps = {
  content: HomeFinalCtaContent;
};
