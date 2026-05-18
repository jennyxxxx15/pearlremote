import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import type { ButtonSize } from './button.styles';
import type { ButtonVariant } from './button.styles';
import { getButtonClassName } from './button.styles';

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'className'> & {
  children?: ReactNode;
  className?: string;
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function ButtonLink({
  children,
  className = '',
  label,
  size = 'default',
  variant = 'black',
  ...linkProps
}: ButtonLinkProps) {
  return (
    <Link
      {...linkProps}
      className={getButtonClassName(variant, size, className)}
    >
      {children ?? label}
    </Link>
  );
}
