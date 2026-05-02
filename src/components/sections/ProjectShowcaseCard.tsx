import { forwardRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PillTag } from '../ui/PillTag';
import { CinematicPoster } from '../cinematic/CinematicPoster';
import type { CarouselProject } from '../../data/carouselProjects';

type ProjectShowcaseCardProps = {
  project: CarouselProject;
  isTouch: boolean;
  /** Position within the carousel — used to prioritise the first poster. */
  index?: number;
  /** Per-card motion speed multiplier for the CinematicPoster. */
  playbackSpeed?: number;
};

const POSTER_TRANSITION_MS = 420;

function buildLayoutClass({
  isTouch,
  isFirst,
}: {
  isTouch: boolean;
  isFirst: boolean;
}) {
  if (isTouch) {
    return 'pt-6 md:grid-cols-2 md:items-center';
  }
  if (isFirst) {
    return 'pt-2 md:grid-cols-2 md:items-start';
  }
  return 'min-h-screen content-center md:grid-cols-2 md:items-center';
}

export const ProjectShowcaseCard = forwardRef<
  HTMLElement,
  ProjectShowcaseCardProps
>(function ProjectShowcaseCard(
  { project, isTouch, index = 0, playbackSpeed = 1 },
  ref,
) {
  const posterImages = useMemo(
    () => [project.heroImage, ...project.processImages].filter(Boolean),
    [project.heroImage, project.processImages],
  );

  const isFirst = index === 0;
  const layoutClass = buildLayoutClass({ isTouch, isFirst });

  return (
    <article
      ref={ref}
      className={`mx-auto grid max-w-6xl gap-10 px-6 pb-16 ${layoutClass}`}
    >
      <div
        data-speed="1"
        className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black/10"
      >
        <CinematicPoster
          title={project.title}
          description={project.description}
          images={posterImages}
          playbackSpeed={playbackSpeed}
          transitionDurationMs={POSTER_TRANSITION_MS}
          priority={isFirst}
          showProgress
          kenBurns
        />
      </div>

      <div data-speed="0.5" className="space-y-5 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {project.id}
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/70">
          {project.category} • <time dateTime={project.year}>{project.year}</time>
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">
          {project.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/78">
          {project.description}
        </p>
        <div className="flex max-w-xl flex-wrap gap-2">
          {project.previewTags.map((tag) => (
            <PillTag key={`${project.id}-${tag}`} variant="outline">
              {tag}
            </PillTag>
          ))}
        </div>
        <Link
          to={project.link}
          className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          View case study
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
});
