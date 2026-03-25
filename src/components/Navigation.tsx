import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/contact') {
      return location.pathname === '/contact' || location.pathname === '/about';
    }
    return location.pathname === path || location.pathname === '/portfolio';
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-[var(--primary)] text-white backdrop-blur dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="ml-12 flex items-center md:ml-2">
          <img
            src="/nav-logo.png"
            alt=""
            className="h-8 w-auto shrink-0 object-contain md:h-10"
            style={{ transform: 'translateY(4px) scale(3)', transformOrigin: 'left center' }}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                'text-sm uppercase tracking-[0.16em] transition-colors ' +
                (isActive(item.path)
                  ? 'text-white dark:text-[#E5D4FF]'
                  : 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-[#F9F7F9]')
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex rounded-full p-2 text-white dark:text-gray-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-transparent bg-[var(--primary)] dark:border-gray-800 dark:bg-black md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={
                  'py-2 text-sm font-medium transition-colors ' +
                  (isActive(item.path)
                    ? 'text-white dark:text-[#E5D4FF]'
                    : 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-[#F9F7F9]')
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

