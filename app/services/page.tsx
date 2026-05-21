import type { Metadata } from 'next';
import servicesPageContent from '../content/services.json';
import { ServicesOverview } from '../features/services/sections/ServicesOverview';
import type { ServicesPageContent } from '../types/services/content.types';
import { FinalCta } from '../features/home/sections/FinalCta';
import { getPageMetadata } from '../lib/seo';

const servicesContent = servicesPageContent as ServicesPageContent;

export const metadata: Metadata = getPageMetadata(
  servicesContent.seo,
  '/services'
);

export default function ServicesPage() {
  const { hero, services, finalCta } = servicesContent;

  return (
    <main>
      <ServicesOverview content={{ hero, services }} />
      <FinalCta content={finalCta} />
    </main>
  );
}
