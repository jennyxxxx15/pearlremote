import type { Metadata } from 'next';

const productionSiteUrl = 'https://pearlremote.com';

export const siteConfig = {
  name: 'Pearl Remote',
  url: productionSiteUrl,
  description:
    'Pearl Remote helps growing teams hire reliable pre-vetted Filipino remote staff for customer support, virtual assistance, e-commerce, social media, and back-office roles.',
};

export const shouldIndexSite =
  process.env.ALLOW_INDEXING === 'true' ||
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export const siteUrl = new URL(siteConfig.url);

export const routes = [
  { path: '/', priority: 1 },
  { path: '/how-it-works', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/talent/mel-customer-service-va', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
  { path: '/privacy-policy', priority: 0.4 },
] as const;

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getPageMetadata(
  seo: Pick<Metadata, 'title' | 'description'>,
  path: string
): Metadata {
  return {
    ...seo,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: seo.title ?? siteConfig.name,
      description: seo.description ?? siteConfig.description,
      url: path,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title ?? siteConfig.name,
      description: seo.description ?? siteConfig.description,
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: getAbsoluteUrl('/images/logo.svg'),
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: getAbsoluteUrl('/contact'),
    },
  };
}
