import { useState } from 'react';
import type { ReactNode } from 'react';
import { Navigation } from '../Navigation';
import { ThemeToggle } from '../ThemeToggle';
import { EnergyPreloader } from '../EnergyPreloader';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {!isReady && <EnergyPreloader onComplete={() => setIsReady(true)} />}

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div
        className={
          isReady
            ? 'opacity-100 transition-opacity duration-500'
            : 'opacity-0'
        }
      >
        <ThemeToggle />
        <Navigation />
        <main id="main-content" className="pt-24">
          {children}
        </main>
      </div>
    </div>
  );
}
