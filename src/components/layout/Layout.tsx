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

      <div
        className={
          isReady
            ? 'opacity-100 transition-opacity duration-500'
            : 'opacity-0'
        }
      >
        <ThemeToggle />
        <Navigation />
        <main className="pt-24">{children}</main>
      </div>
    </div>
  );
}
