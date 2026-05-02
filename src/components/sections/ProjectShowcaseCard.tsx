import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PillTag } from '../ui/PillTag';
import { ProcessHoverGallery } from '../ProcessHoverGallery';
import type { CarouselProject } from '../../data/carouselProjects';

type ProjectShowcaseCardProps = {
  project: CarouselProject;
  isTouch: boolean;
};

export const ProjectShowcaseCard = forwardRef<
  HTMLElement,
  ProjectShowcaseCardProps
>(function ProjectShowcaseCard({ project, isTouch }, ref) {
  return (
    <article
      ref={ref}
      className={
        'mx-auto grid max-w-6xl gap-10 px-6 pb-16 ' +
        (isTouch
          ? 'pt-6 md:grid-cols-2 md:items-center'
          : 'min-h-screen content-center md:grid-cols-2 md:items-center')
      }
    >
      <div
        data-speed="1"
        className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black/10"
      >
        <ProcessHoverGallery
          title={project.title}
          heroImage={project.heroImage}
          processImages={project.processImages}
        />
      </div>

      <div data-speed="0.5" className="space-y-5 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {project.id}
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/70">
          {project.category} • {project.year}
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">{project.title}</h2>
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
