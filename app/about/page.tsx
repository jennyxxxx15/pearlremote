import type { Metadata } from 'next';
import aboutPageContent from '../content/about.json';
import { AboutHero } from '../features/about/sections/AboutHero';
import { WhyPhilippines } from '../features/about/sections/WhyPhilippines';
import type { AboutPageContent } from '../types/about/content.types';

const aboutContent = aboutPageContent as AboutPageContent;

export const metadata: Metadata = aboutContent.seo;

export default function AboutPage() {
  const { hero, philippines } = aboutContent;

  return (
    <main>
      <AboutHero content={hero} />
      <WhyPhilippines content={philippines} />
    </main>
  );
}
