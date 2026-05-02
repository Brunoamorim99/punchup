import type { ButtonHTMLAttributes, ReactNode } from 'react';

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function GradientButton({
  children,
  className = '',
  ...rest
}: GradientButtonProps) {
  return (
    <button
      {...rest}
      className={
        'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-pink-500 to-amber-400 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ' +
        className
      }
    >
      {children}
    </button>
  );
}
