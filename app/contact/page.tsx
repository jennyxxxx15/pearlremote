import type { Metadata } from 'next';
import contactPageContent from '../content/contact.json';
import { ContactHero } from '../features/contact/sections/ContactHero';
import { ContactInquiry } from '../features/contact/sections/ContactInquiry';
import type { ContactPageContent } from '../types/contact/content.types';

const contactContent = contactPageContent as ContactPageContent;

export const metadata: Metadata = contactContent.seo;

export default function ContactPage() {
  const { hero, inquiry } = contactContent;

  return (
    <main>
      <ContactHero content={hero} />
      <ContactInquiry content={inquiry} />
    </main>
  );
}
