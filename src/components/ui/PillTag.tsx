import type { ReactNode } from 'react';

type PillTagProps = {
  children: ReactNode;
  variant?: 'default' | 'outline';
};

const variantStyles: Record<NonNullable<PillTagProps['variant']>, string> = {
  default: 'rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800',
  outline:
    'rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-medium text-white/95',
};

export function PillTag({ children, variant = 'default' }: PillTagProps) {
  return <span className={variantStyles[variant]}>{children}</span>;
}
