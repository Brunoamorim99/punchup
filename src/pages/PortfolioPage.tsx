import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export function PortfolioPage() {
  return (
    <div className="px-6 pb-20">
      <section className="mx-auto max-w-6xl pt-24">
        <header className="mb-14">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            A selection of projects showing how I approach complex problems with
            user-centered design, product thinking, and clear visual systems.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div
                className={`aspect-video overflow-hidden rounded-2xl ${
                  project.image ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain p-4"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-gray-400">
                    Project visual — replace with exported Figma cover for{' '}
                    <span className="ml-1 font-medium text-gray-600">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  {project.category} • {project.year}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                  {project.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-pink-500 to-amber-400 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg hover:brightness-110"
                >
                  View case study
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
