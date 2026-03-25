import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia?.(
    '(prefers-color-scheme: dark)',
  ).matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed left-4 top-16 z-[60] inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-xs font-medium text-gray-900 shadow-sm backdrop-blur transition hover:scale-105 hover:border-violet-700 hover:text-violet-700 dark:border-gray-700 dark:bg-black/70 dark:text-gray-100"
    >
      {isDark ? '☾' : '☼'}
    </button>
  );
}

