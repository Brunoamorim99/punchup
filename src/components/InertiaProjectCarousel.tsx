import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProcessHoverGallery } from './ProcessHoverGallery';
import type { CarouselProject } from '../data/carouselProjects';

type InertiaProjectCarouselProps = {
  projects: CarouselProject[];
  sectionId?: string;
};

export function InertiaProjectCarousel({
  projects,
  sectionId = 'portfolio',
}: InertiaProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouch(coarsePointer || reducedMotion);
  }, []);

  useEffect(() => {
    if (isTouch || !containerRef.current || !projects.length) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const imageLayer = section.querySelector<HTMLElement>('[data-speed="1"]');
        const textLayer = section.querySelector<HTMLElement>('[data-speed="0.5"]');

        if (imageLayer) {
          gsap.fromTo(
            imageLayer,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            },
          );
        }

        if (textLayer) {
          gsap.fromTo(
            textLayer,
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: section,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => {
            setActiveIndex(index);
          },
          onEnterBack: () => {
            setActiveIndex(index);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isTouch, projects.length]);

  const scrollToProject = (index: number) => {
    const target = sectionRefs.current[index];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      id={sectionId}
      ref={containerRef}
      className="work-carousel relative"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <header className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Work</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Project Showcase
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/78">
            A motion-first project gallery with process reveals, high-inertia
            scroll, and brand-color transitions.
          </p>
        </header>
      </div>

      {!isTouch && (
        <div className="fixed right-6 top-1/2 z-40 -translate-y-1/2 space-y-3">
          {projects.map((project, index) => (
            <button
              key={`${project.id}-${project.title}`}
              type="button"
              onClick={() => scrollToProject(index)}
              className={`block text-sm tracking-[0.2em] transition ${
                activeIndex === index ? 'text-white' : 'text-white/45 hover:text-white/80'
              }`}
              aria-label={`Jump to ${project.title}`}
            >
              {project.id}
            </button>
          ))}
        </div>
      )}

      <section className="space-y-0">
        {projects.map((project, index) => (
          <article
            key={`${project.id}-${project.title}`}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
            className={`mx-auto grid max-w-6xl gap-10 px-6 pb-16 ${
              isTouch ? 'pt-6 md:grid-cols-2 md:items-center' : 'min-h-screen content-center md:grid-cols-2 md:items-center'
            }`}
          >
            <div data-speed="1" className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black/10">
              <ProcessHoverGallery
                title={project.title}
                heroImage={project.heroImage}
                processImages={project.processImages}
              />
            </div>

            <div data-speed="0.5" className="space-y-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">{project.id}</p>
              <h2 className="text-3xl font-semibold md:text-5xl">{project.title}</h2>
              <p className="max-w-xl text-base leading-relaxed text-white/78">
                {project.description}
              </p>
              <Link
                to={project.link}
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                View case study
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
