import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectShowcaseHeader } from './sections/ProjectShowcaseHeader';
import { ProjectScrollIndicator } from './sections/ProjectScrollIndicator';
import { ProjectShowcaseCard } from './sections/ProjectShowcaseCard';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { CarouselProject } from '../data/carouselProjects';

type InertiaProjectCarouselProps = {
  projects: CarouselProject[];
  sectionId?: string;
};

/** Parallax strength for each layer inside a card while it passes the viewport. */
const PARALLAX_CONFIG = {
  image: { fromPercent: -12, toPercent: 12, scrub: 1.2 },
  text: { fromPercent: -4, toPercent: 4, scrub: 1 },
} as const;

/** Where along the viewport a card is considered "active" for the dot indicator. */
const ACTIVE_TRIGGER_START = 'top 55%';
const ACTIVE_TRIGGER_END = 'bottom 55%';

export function InertiaProjectCarousel({
  projects,
  sectionId = 'portfolio',
}: InertiaProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(hasCoarsePointer || prefersReducedMotion);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isTouch || !containerRef.current || !projects.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const imageLayer = section.querySelector<HTMLElement>('[data-speed="1"]');
        const textLayer = section.querySelector<HTMLElement>('[data-speed="0.5"]');

        if (imageLayer) {
          gsap.fromTo(
            imageLayer,
            { yPercent: PARALLAX_CONFIG.image.fromPercent },
            {
              yPercent: PARALLAX_CONFIG.image.toPercent,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: PARALLAX_CONFIG.image.scrub,
              },
            },
          );
        }

        if (textLayer) {
          gsap.fromTo(
            textLayer,
            { yPercent: PARALLAX_CONFIG.text.fromPercent },
            {
              yPercent: PARALLAX_CONFIG.text.toPercent,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: PARALLAX_CONFIG.text.scrub,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: section,
          start: ACTIVE_TRIGGER_START,
          end: ACTIVE_TRIGGER_END,
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => context.revert();
  }, [isTouch, projects.length]);

  const scrollToProject = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id={sectionId}
      ref={containerRef}
      className="work-carousel relative"
      aria-label="Project showcase"
    >
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-20">
        <ProjectShowcaseHeader />
      </div>

      {!isTouch && (
        <ProjectScrollIndicator
          projects={projects}
          activeIndex={activeIndex}
          onJumpTo={scrollToProject}
        />
      )}

      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectShowcaseCard
            key={`${project.id}-${project.title}`}
            project={project}
            isTouch={isTouch}
            index={index}
            playbackSpeed={1}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
          />
        ))}
      </div>
    </section>
  );
}
