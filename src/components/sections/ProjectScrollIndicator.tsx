import type { CarouselProject } from '../../data/carouselProjects';

type ProjectScrollIndicatorProps = {
  projects: CarouselProject[];
  activeIndex: number;
  onJumpTo: (index: number) => void;
};

export function ProjectScrollIndicator({
  projects,
  activeIndex,
  onJumpTo,
}: ProjectScrollIndicatorProps) {
  return (
    <nav
      aria-label="Project navigation"
      className="fixed right-6 top-1/2 z-40 -translate-y-1/2 space-y-3"
    >
      {projects.map((project, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={`${project.id}-${project.title}`}
            type="button"
            onClick={() => onJumpTo(index)}
            className={
              'block text-sm tracking-[0.2em] transition ' +
              (isActive
                ? 'text-white'
                : 'text-white/45 hover:text-white/80')
            }
            aria-label={`Jump to ${project.title}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {project.id}
          </button>
        );
      })}
    </nav>
  );
}
