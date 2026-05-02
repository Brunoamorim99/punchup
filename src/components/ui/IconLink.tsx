import type { ReactNode } from 'react';

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

export function IconLink({ href, label, icon, external = true }: IconLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      aria-label={label}
      {...externalProps}
      className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
    >
      {icon}
    </a>
  );
}
