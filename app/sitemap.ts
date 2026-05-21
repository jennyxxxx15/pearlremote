import type { MetadataRoute } from 'next';
import { getAbsoluteUrl, routes, shouldIndexSite } from './lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!shouldIndexSite) {
    return [];
  }

  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: getAbsoluteUrl(path),
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
