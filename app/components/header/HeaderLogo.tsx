import Image from 'next/image';
import Link from 'next/link';

type HeaderLogoProps = {
  href: string;
  label: string;
  logoSrc?: string;
};

export function HeaderLogo({ href, label, logoSrc }: HeaderLogoProps) {
  if (logoSrc) {
    return (
      <Link
        href={href}
        aria-label={`${label} home`}
        className='focus-visible:ring-primary inline-flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <Image
          src={logoSrc}
          alt=''
          width={360}
          height={65}
          priority
          unoptimized
          className='w-auto max-w-44 sm:h-9 sm:max-w-52 md:max-w-56'
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`${label} home`}
      className='focus-visible:ring-primary text-lg font-semibold tracking-tight text-slate-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
    >
      {label}
    </Link>
  );
}
