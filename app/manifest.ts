import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pearl Remote',
    short_name: 'Pearl Remote',
    description:
      'Pearl Remote helps growing teams hire reliable remote staff for customer support, virtual assistance, e-commerce, social media, and back-office roles.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdf7ff',
    theme_color: '#4f378a',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
