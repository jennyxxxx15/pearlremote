import type { Metadata } from 'next';
import aboutPageContent from '../content/about.json';
import { AboutEdge } from '../features/about/sections/AboutEdge';
import { AboutHero } from '../features/about/sections/AboutHero';
import { WhyPhilippines } from '../features/about/sections/WhyPhilippines';
import type { AboutPageContent } from '../types/about/content.types';
import { FinalCta } from '../features/home/sections/FinalCta';
import { getPageMetadata } from '../lib/seo';

const aboutContent = aboutPageContent as AboutPageContent;

export const metadata: Metadata = getPageMetadata(aboutContent.seo, '/about');

export default function AboutPage() {
  const { edge, hero, philippines, finalCta } = aboutContent;

  return (
    <main>
      <AboutHero content={hero} />
      <WhyPhilippines content={philippines} />
      <AboutEdge content={edge} />
      <FinalCta content={finalCta} />
    </main>
  );
}
