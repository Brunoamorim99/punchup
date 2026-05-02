type MediaFrameProps = {
  label: string;
  src?: string;
};

const VIDEO_EXTENSION = /\.(mp4|webm|ogg|mov)$/i;

export function MediaFrame({ label, src }: MediaFrameProps) {
  if (!src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
        {label}
      </div>
    );
  }

  const isVideo = VIDEO_EXTENSION.test(src);

  return (
    <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {isVideo ? (
        <video
          src={src}
          controls
          preload="metadata"
          className="max-h-[620px] w-full bg-white object-contain"
        />
      ) : (
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="max-h-[620px] w-full bg-white object-contain"
        />
      )}
    </figure>
  );
}
