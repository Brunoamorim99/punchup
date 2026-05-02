import { MediaFrame } from './MediaFrame';

type MediaRowProps = {
  sources: string[];
  labelPrefix: string;
};

export function MediaRow({ sources, labelPrefix }: MediaRowProps) {
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
        <MediaFrame
          key={`${labelPrefix}-${index + 1}-${src}`}
          label={`${labelPrefix} ${index + 1}`}
          src={src}
        />
      ))}
    </div>
  );
}
