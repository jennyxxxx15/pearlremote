import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { HeaderLogo } from '../header/HeaderLogo';
import type { FooterProps } from '../../types/footer/components.types';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

const footerLinkClassName =
  'border-b border-current transition-colors duration-200 ease-out hover:text-primary focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';
const footerSocialLinkClassName =
  'inline-flex transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-primary focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';

export function Footer({ content }: FooterProps) {
  return (
    <footer className='bg-footer-surface'>
      <div className='container mx-auto grid gap-12 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:py-20'>
        <div>
          <HeaderLogo href={content.brand.href} label={content.brand.label} />
          <p className='mt-4 text-sm'>{content.brand.description}</p>
        </div>

        {content.sections.map((section) => (
          <nav key={section.heading} aria-label={section.heading}>
            <h2 className='text-heading font-bold'>{section.heading}</h2>
            <ol className='mt-6 flex flex-col gap-4'>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ))}

        <nav aria-label={content.social.heading}>
          <h2 className='text-heading font-bold'>{content.social.heading}</h2>
          <ol className='mt-6 flex gap-4'>
            {content.social.links.map((link) => {
              const Icon = socialIcons[link.icon];

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className={footerSocialLinkClassName}
                  >
                    <Icon aria-hidden='true' focusable='false' />
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div className='py-6 text-center text-sm'>
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
}
