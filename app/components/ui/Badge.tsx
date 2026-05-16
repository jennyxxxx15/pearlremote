import type { ReactNode } from 'react';

type BadgeSize = 'default' | 'small';

type BadgeProps = {
  children: ReactNode;
  className?: string;
  full?: boolean;
  icon?: ReactNode;
  size?: BadgeSize;
};

const badgeSizes: Record<BadgeSize, string> = {
  default: 'gap-2 px-4 py-2 text-xs',
  small: 'gap-1.5 px-3 py-1 text-[0.6875rem]',
};

export function Badge({
  children,
  className = '',
  full = false,
  icon,
  size = 'default',
}: BadgeProps) {
  return (
    <div
      className={`bg-badge-surface text-badge-foreground flex items-center rounded-full font-semibold ${badgeSizes[size]} ${full ? 'w-full' : 'w-fit'} ${className}`}
    >
      {icon}
      {children}
    </div>
  );
}
