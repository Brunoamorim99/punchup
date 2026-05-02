import { memo } from 'react';

function ProjectShowcaseHeaderComponent() {
  return (
    <header className="mb-6 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-white/60">Work</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        Projects
      </h1>
    </header>
  );
}

export const ProjectShowcaseHeader = memo(ProjectShowcaseHeaderComponent);
