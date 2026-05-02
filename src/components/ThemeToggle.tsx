import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="fixed left-4 top-16 z-[60] inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-xs font-medium text-gray-900 shadow-sm backdrop-blur transition hover:scale-105 hover:border-violet-700 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-black/70 dark:text-gray-100"
    >
      {isDark ? '☾' : '☼'}
    </button>
  );
}
