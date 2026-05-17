'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FooterLinkProps = {
  href: string;
  label: string;
};

const footerLinkClassName =
  'relative inline-grid border-b border-current transition-colors duration-200 ease-out hover:text-primary focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';

export function FooterLink({ href, label }: FooterLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`${footerLinkClassName} ${isActive ? 'text-primary font-semibold' : ''}`}
    >
      <span className='col-start-1 row-start-1'>{label}</span>
      <span
        aria-hidden='true'
        className='invisible col-start-1 row-start-1 font-semibold'
      >
        {label}
      </span>
    </Link>
  );
}
