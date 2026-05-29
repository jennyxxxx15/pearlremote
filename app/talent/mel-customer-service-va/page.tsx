import type { Metadata } from 'next';
import talentProfileContent from '../../content/talent/mel-customer-service-va.json';
import { TalentProfileCta } from '../../features/talent/sections/TalentProfileCta';
import { TalentProfileFit } from '../../features/talent/sections/TalentProfileFit';
import { TalentProfileHero } from '../../features/talent/sections/TalentProfileHero';
import { TalentProfileOverview } from '../../features/talent/sections/TalentProfileOverview';
import { getAbsoluteUrl, getPageMetadata } from '../../lib/seo';
import type { TalentProfilePageContent } from '../../types/talent/content.types';

const talentProfile = talentProfileContent as TalentProfilePageContent;
const profilePath = '/talent/mel-customer-service-va';

export const metadata: Metadata = getPageMetadata(
  talentProfile.seo,
  profilePath
);

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mel',
  jobTitle: 'Customer Service Virtual Assistant',
  description: talentProfile.hero.description,
  image: getAbsoluteUrl(talentProfile.hero.image.src),
  url: getAbsoluteUrl(profilePath),
  worksFor: {
    '@type': 'Organization',
    name: 'Pearl Remote',
    url: getAbsoluteUrl('/'),
  },
  knowsAbout: talentProfile.hero.badges,
};

export default function MelCustomerServiceVaPage() {
  const { cta, fit, hero, overview } = talentProfile;

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c'),
        }}
      />
      <TalentProfileHero content={hero} />
      <TalentProfileOverview content={overview} />
      <TalentProfileFit content={fit} />
      <TalentProfileCta content={cta} />
    </main>
  );
}
