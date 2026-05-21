import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import footerContent from './content/footer.json';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './globals.css';
import type { FooterContent } from './types/footer/content.types';
import {
  getOrganizationSchema,
  shouldIndexSite,
  siteConfig,
  siteUrl,
} from './lib/seo';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const footer = footerContent as FooterContent;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  description: siteConfig.description,
  manifest: '/manifest.webmanifest',
  robots: {
    index: shouldIndexSite,
    follow: shouldIndexSite,
    googleBot: {
      index: shouldIndexSite,
      follow: shouldIndexSite,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />
        <Header />
        {children}
        <Footer content={footer} />
      </body>
    </html>
  );
}
