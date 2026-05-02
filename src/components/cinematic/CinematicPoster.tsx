import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAutoplay } from '../../hooks/useAutoplay';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export type CinematicPosterProps = {
  title: string;
  description?: string;
  images: string[];
  /**
   * Multiplier applied to the base frame duration.
   * 1 = default cadence, 0.5 = twice as fast, 2 = half speed.
   */
  playbackSpeed?: number;
  /**
   * Explicit override for how long each frame is held, in ms.
   * Takes precedence over playbackSpeed when provided.
   */
  frameDurationMs?: number;
  /** Crossfade/zoom transition length per slide, in ms. */
  transitionDurationMs?: number;
  /** Whether the slideshow advances while the poster is hovered/focused. */
  autoplayOnHover?: boolean;
  /** CSS object-fit applied to each frame. Defaults to 'cover'. */
  objectFit?: 'cover' | 'contain';
  /** When true, the first frame is loaded eagerly. */
  priority?: boolean;
  /** Render a thin projector-style bar that fills during each slide. */
  showProgress?: boolean;
  /** Apply a subtle Ken-Burns drift alongside the crossfade. */
  kenBurns?: boolean;
  /** Fired whenever the active frame index changes. */
  onFrameChange?: (index: number) => void;
};

const DEFAULT_FRAME_DURATION_MS = 1680;
const DEFAULT_TRANSITION_DURATION_MS = 400;
const VIDEO_EXTENSION_PATTERN = /\.(mp4|webm|ogg|mov)$/i;

const STATIC_INITIAL_VARIANT = { opacity: 0, scale: 1.015 } as const;
const STATIC_ANIMATE_VARIANT = { opacity: 1, scale: 1 } as const;

const KEN_BURNS_INITIAL_VARIANT = {
  opacity: 0,
  scale: 1.06,
  x: -6,
  y: 6,
} as const;
const KEN_BURNS_ANIMATE_VARIANT = {
  opacity: 1,
  scale: 1,
  x: 0,
  y: 0,
} as const;

const EXIT_VARIANT = { opacity: 0, scale: 0.99 } as const;

function isVideoSource(src: string) {
  return VIDEO_EXTENSION_PATTERN.test(src);
}

function CinematicPosterComponent({
  title,
  description,
  images,
  playbackSpeed = 1,
  frameDurationMs,
  transitionDurationMs = DEFAULT_TRANSITION_DURATION_MS,
  autoplayOnHover = true,
  objectFit = 'cover',
  priority = false,
  showProgress = false,
  kenBurns = false,
  onFrameChange,
}: CinematicPosterProps) {
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const frames = useMemo(
    () => images.filter((src): src is string => Boolean(src && src.trim())),
    [images],
  );

  const resolvedFrameDurationMs = useMemo(() => {
    if (frameDurationMs && frameDurationMs > 0) return frameDurationMs;
    const safeMultiplier = playbackSpeed > 0 ? playbackSpeed : 1;
    return DEFAULT_FRAME_DURATION_MS * safeMultiplier;
  }, [frameDurationMs, playbackSpeed]);

  const shouldAutoplay =
    autoplayOnHover && isHovering && !prefersReducedMotion && frames.length > 1;

  const handleFrameChange = useCallback(
    (index: number) => {
      onFrameChange?.(index);
    },
    [onFrameChange],
  );

  const activeIndex = useAutoplay({
    frameCount: frames.length,
    intervalMs: resolvedFrameDurationMs,
    isActive: shouldAutoplay,
    onChange: handleFrameChange,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    frames.forEach((src, index) => {
      if (isVideoSource(src)) return;
      if (index === 0 && priority) return;
      const image = new Image();
      image.src = src;
    });
  }, [frames, prefersReducedMotion, priority]);

  if (!frames.length) {
    return (
      <div
        role="img"
        aria-label={`${title} — visual coming soon`}
        className="flex h-full items-center justify-center bg-white px-6 text-center text-sm text-gray-400"
      >
        Project visual coming soon
      </div>
    );
  }

  const activeFrame = frames[activeIndex];
  const activeFrameIsVideo = isVideoSource(activeFrame);
  const transitionSeconds = transitionDurationMs / 1000;
  const mediaClassName = `h-full w-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`;

  const initialVariant = kenBurns
    ? KEN_BURNS_INITIAL_VARIANT
    : STATIC_INITIAL_VARIANT;
  const animateVariant = kenBurns
    ? KEN_BURNS_ANIMATE_VARIANT
    : STATIC_ANIMATE_VARIANT;

  return (
    <figure
      className="relative h-full w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      aria-label={title}
    >
      <AnimatePresence mode="wait">
        {activeFrameIsVideo ? (
          <motion.video
            key={`${activeFrame}-${activeIndex}`}
            src={activeFrame}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className={mediaClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionSeconds, ease: 'easeInOut' }}
          />
        ) : (
          <motion.img
            key={`${activeFrame}-${activeIndex}`}
            src={activeFrame}
            alt={description ? `${title} — ${description}` : title}
            loading={priority && activeIndex === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={mediaClassName}
            initial={initialVariant}
            animate={animateVariant}
            exit={EXIT_VARIANT}
            transition={{ duration: transitionSeconds, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent"
      />

      {showProgress && shouldAutoplay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/10"
        >
          <motion.div
            key={`${activeIndex}-progress`}
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: resolvedFrameDurationMs / 1000,
              ease: 'linear',
            }}
          />
        </div>
      )}

      {description && (
        <figcaption className="sr-only">{description}</figcaption>
      )}
    </figure>
  );
}

export const CinematicPoster = memo(CinematicPosterComponent);
