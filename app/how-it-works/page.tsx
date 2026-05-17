import type { Metadata } from 'next';
import howItWorksPageContent from '../content/how-it-works.json';
import { HowItWorksHighlights } from '../features/how-it-works/sections/HowItWorksHighlights';
import { HowItWorksProcess } from '../features/how-it-works/sections/HowItWorksProcess';
import type { HowItWorksPageContent } from '../types/how-it-works/content.types';

const howItWorksContent = howItWorksPageContent as HowItWorksPageContent;

export const metadata: Metadata = howItWorksContent.seo;

export default function HowItWorksPage() {
  const { hero, highlights, steps } = howItWorksContent;

  return (
    <main>
      <HowItWorksProcess content={{ hero, steps }} />
      <HowItWorksHighlights content={highlights} />
    </main>
  );
}
