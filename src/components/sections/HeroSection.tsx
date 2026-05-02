import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { RoleList } from './RoleList';
import { heroRoles } from '../../data/siteContent';
import { useStaggeredReveal } from '../../hooks/useStaggeredReveal';

const headingFont = '"Pachang", sans-serif';
const bodyFont = '"Manrope", sans-serif';

export function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useStaggeredReveal({
    targets: [nameRef, subtitleRef, rolesRef, ctaRef],
  });

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 pb-20">
      <article className="mx-auto w-full max-w-5xl pt-10">
        <header>
          <h1
            ref={nameRef}
            style={{ fontFamily: headingFont }}
            className="text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--text)]"
          >
            Hi, I&apos;m
            <br />
            Bruno
            <br />
            Amorim
            <br />
            dos Santos
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400"
            style={{ fontFamily: bodyFont, fontWeight: 400 }}
          >
            Combining{' '}
            <span className="font-semibold text-[var(--text)]">design</span>,{' '}
            <span className="font-semibold text-[var(--text)]">research</span>,
            and{' '}
            <span className="font-semibold text-[var(--text)]">
              product thinking
            </span>{' '}
            to craft meaningful digital experiences.
          </p>
        </header>

        <div ref={rolesRef}>
          <RoleList roles={heroRoles} />
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white dark:border-gray-600 dark:text-gray-300"
          >
            View my work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[var(--accent-warm)] hover:bg-[var(--accent-warm)] hover:text-white dark:border-gray-600 dark:text-gray-300"
          >
            Get in touch
          </Link>
        </div>
      </article>
    </section>
  );
}
