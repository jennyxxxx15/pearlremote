import type { Metadata } from 'next';
import contactPageContent from '../content/contact.json';
import homePageContent from '../content/home.json';
import { ContactHero } from '../features/contact/sections/ContactHero';
import { ContactInquiry } from '../features/contact/sections/ContactInquiry';
import { getPageMetadata } from '../lib/seo';
import type { ContactPageContent } from '../types/contact/content.types';
import type { HomePageContent } from '../types/home/content.types';

const contactContent = contactPageContent as ContactPageContent;
const homeContent = homePageContent as HomePageContent;
const melTestimonial = {
  quote:
    'Mel has been a reliable support partner for our customer service and operations. She handles customer updates, returns, and logistics details with care and consistency.',
  rating: 5,
  author: {
    name: 'BlankSpaceLabel',
    role: 'Client review for Mel',
    image: {
      src: '/images/testimonials/placeholder.svg',
      alt: '',
    },
  },
};

export const metadata: Metadata = getPageMetadata(
  contactContent.seo,
  '/contact'
);

export default function ContactPage() {
  const { hero, inquiry } = contactContent;
  const { testimonials } = homeContent;

  return (
    <main>
      <ContactHero content={hero} />
      <ContactInquiry
        content={inquiry}
        featuredTestimonial={melTestimonial}
        testimonials={testimonials.items}
      />
    </main>
  );
}
