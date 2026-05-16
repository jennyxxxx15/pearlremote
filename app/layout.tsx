import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import footerContent from './content/footer.json';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './globals.css';
import type { FooterContent } from './types/footer/content.types';

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
  title: 'Pearl Remote',
  description: 'Remote staffing services for growing teams.',
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
        <Header />
        {children}
        <Footer content={footer} />
      </body>
    </html>
  );
}
