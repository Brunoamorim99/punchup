import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ROLES = ['UX/UI Design', 'User Research', 'Product Ideation', 'Branding'];

export function HomePage() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const rolesRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { el: nameRef.current, delay: 0 },
      { el: subtitleRef.current, delay: 120 },
      { el: rolesRef.current, delay: 240 },
      { el: ctaRef.current, delay: 380 },
    ];

    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 pb-20">
      <section className="mx-auto w-full max-w-5xl pt-10">

        {/* Big name */}
        <h1
          ref={nameRef}
          style={{ fontFamily: '"Pachang", sans-serif' }}
          className="text-[clamp(3.5rem,12vw,9rem)] leading-[0.95] tracking-tight font-extrabold text-[var(--text)]"
        >
          Hi, I&apos;m
          <br />
          Bruno
          <br />
          Amorim
          <br />
          dos Santos
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400"
          style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 400 }}
        >
          Combining <span className="font-semibold text-[var(--text)]">design</span>,{' '}
          <span className="font-semibold text-[var(--text)]">research</span>, and{' '}
          <span className="font-semibold text-[var(--text)]">product thinking</span> to
          craft meaningful digital experiences.
        </p>

        {/* Roles */}
        <ul
          ref={rolesRef}
          className="mt-8 flex flex-wrap gap-3"
          style={{ fontFamily: '"Manrope", sans-serif' }}
        >
          {ROLES.map((role) => (
            <li
              key={role}
              className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-500 transition-all duration-300 hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] dark:border-gray-700 dark:text-gray-400"
            >
              {role}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white dark:border-gray-600 dark:text-gray-300"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[var(--accent-warm)] hover:bg-[var(--accent-warm)] hover:text-white dark:border-gray-600 dark:text-gray-300"
          >
            Get in touch
          </Link>
        </div>

      </section>
    </div>
  );
}
