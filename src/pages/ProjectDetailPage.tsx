import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

function ImageFrame({ label, src }: { label: string; src?: string }) {
  if (src) {
    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);

    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {isVideo ? (
          <video
            src={src}
            controls
            preload="metadata"
            className="max-h-[620px] w-full object-contain bg-white"
          />
        ) : (
          <img src={src} alt={label} className="max-h-[620px] w-full object-contain bg-white" />
        )}
      </div>
    );
  }

  return (
    <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
      {label}
    </div>
  );
}

function ImageRow({
  sources,
  labelPrefix,
}: {
  sources: string[];
  labelPrefix: string;
}) {
  if (!sources.length) return null;

  const gridClass =
    sources.length > 1
      ? sources.length === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-3'
      : '';

  return (
    <div className={`mt-5 grid gap-4 ${gridClass}`}>
      {sources.map((src, index) => (
        <ImageFrame
          key={`${labelPrefix}-${index + 1}-${src}`}
          label={`${labelPrefix} ${index + 1}`}
          src={src}
        />
      ))}
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const caseStudyImages = project.caseStudyImages ?? [];
  const mediaAt = (index: number) => caseStudyImages[index];
  const mediaByIndex = (indices: number[]) =>
    indices
      .map((index) => mediaAt(index))
      .filter((src): src is string => Boolean(src && src.trim()));

  const overviewImages = mediaByIndex([0]);
  const problemImages = mediaByIndex([1, 2]);
  const researchImages = mediaByIndex([3]);
  const processImages = mediaByIndex([4, 5, 6]);
  const solutionImages = mediaByIndex([7]);
  const impactImages = mediaByIndex([8, 9]);

  return (
    <div className="bg-white px-6 pb-20">
      <Link
        to="/portfolio"
        aria-label="Back to portfolio"
        className="fixed left-4 top-28 z-[59] inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-900 shadow-sm backdrop-blur transition hover:scale-105 hover:border-violet-700 hover:text-violet-700 dark:border-gray-700 dark:bg-black/70 dark:text-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mx-auto max-w-5xl pt-4">
        {/* hero visual */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-white">
          {project.caseStudyHeroImage ? (
            <img
              src={project.caseStudyHeroImage}
              alt={`${project.title} hero`}
              className="h-full max-h-[520px] w-full object-contain bg-white"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center px-6 text-sm text-gray-400">
              Replace this area with your main Figma export for{' '}
              <span className="ml-1 font-medium text-gray-600">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            {project.category} • {project.year}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {project.description}
          </p>
        </header>

        <section className="mb-12 grid gap-8 border-b border-gray-200 pb-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Role
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Timeline
            </h2>
            <p className="text-sm text-gray-800">{project.year}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Category
            </h2>
            <p className="text-sm text-gray-800">{project.category}</p>
          </div>
        </section>

        {project.liveUrl && (
          <div className="mb-12 flex justify-start">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-pink-500 to-amber-400 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg hover:brightness-110"
            >
              Visit live project
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}

        <section className="mb-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.description}
            </p>
            <ImageRow sources={overviewImages} labelPrefix="Overview visual" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              The problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.problem}
            </p>
            <ImageRow sources={problemImages} labelPrefix="Problem visual" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Research & discovery
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.research}
            </p>
            <ImageRow sources={researchImages} labelPrefix="Research visual" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Challenges
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.challenges}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Design process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.designProcess}
            </p>
            <ImageRow sources={processImages} labelPrefix="Process visual" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              The solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.solution}
            </p>
            <ImageRow sources={solutionImages} labelPrefix="Solution visual" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Key features
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Impact & results
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {project.impact}
            </p>
            <ImageRow sources={impactImages} labelPrefix="Impact visual" />
          </div>
        </section>

      </div>
    </div>
  );
}

