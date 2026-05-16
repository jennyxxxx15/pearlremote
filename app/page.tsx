import type { Metadata } from 'next';
import homePageContent from './content/home.json';
import { CoreServices } from './features/home/sections/CoreServices';
import { Faqs } from './features/home/sections/Faqs';
import { FinalCta } from './features/home/sections/FinalCta';
import { HomeHero } from './features/home/sections/HomeHero';
import { HowItWorks } from './features/home/sections/HowItWorks';
import { PopularRoles } from './features/home/sections/PopularRoles';
import { Testimonials } from './features/home/sections/Testimonials';
import { WhyChooseUs } from './features/home/sections/WhyChooseUs';
import type { HomePageContent } from './types/home/content.types';

const homeContent = homePageContent as HomePageContent;

export const metadata: Metadata = homeContent.seo;

export default function HomePage() {
  const {
    coreServices,
    faqs,
    finalCta,
    hero,
    howItWorks,
    popularRoles,
    testimonials,
    whyChooseUs,
  } = homeContent;

  return (
    <main>
      <HomeHero content={hero} />
      <HowItWorks content={howItWorks} />
      <CoreServices content={coreServices} />
      <WhyChooseUs content={whyChooseUs} />
      <PopularRoles content={popularRoles} />
      <Testimonials content={testimonials} />
      <Faqs content={faqs} />
      <FinalCta content={finalCta} />
    </main>
  );
}
