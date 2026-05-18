export type ButtonVariant = 'black' | 'primary' | 'white' | 'transparent';

export type ButtonSize = 'default' | 'small';

const buttonVariants: Record<ButtonVariant, string> = {
  black:
    'bg-button-black text-button-white shadow-sm hover:bg-button-black-hover hover:shadow-md active:bg-heading',
  primary:
    'bg-primary text-button-white shadow-sm hover:bg-primary-dark hover:shadow-md active:bg-primary-darker',
  white:
    'border border-button-border bg-button-white text-heading shadow-sm hover:border-button-border-hover hover:bg-primary-surface hover:text-primary hover:shadow-md active:bg-primary-surface-hover',
  transparent:
    'bg-transparent text-primary hover:bg-primary-surface hover:text-primary active:bg-primary-surface-hover',
};

const buttonSizes: Record<ButtonSize, string> = {
  default: 'rounded-xl px-6 py-3',
  small: 'rounded-lg px-4 py-2 text-sm',
};

export function getButtonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string
) {
  return `focus-visible:ring-primary cursor-pointer font-semibold transition-[background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`;
}
