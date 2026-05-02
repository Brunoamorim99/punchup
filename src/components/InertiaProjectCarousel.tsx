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
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(coarsePointer || prefersReducedMotion);
  }, [prefersReducedMotion]);

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
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
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
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24">
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
