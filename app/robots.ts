import type { MetadataRoute } from 'next';
import { getAbsoluteUrl, shouldIndexSite, siteConfig } from './lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndexSite) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      host: siteConfig.url,
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: getAbsoluteUrl('/sitemap.xml'),
    host: siteConfig.url,
  };
}
