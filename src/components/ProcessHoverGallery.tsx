import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ProcessHoverGalleryProps = {
  title: string;
  heroImage?: string;
  processImages?: string[];
};

export function ProcessHoverGallery({
  title,
  heroImage,
  processImages = [],
}: ProcessHoverGalleryProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const frames = useMemo(() => {
    const validProcess = processImages.filter(Boolean);
    if (!heroImage) return validProcess;
    return [heroImage, ...validProcess];
  }, [heroImage, processImages]);

  useEffect(() => {
    frames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [frames]);

  useEffect(() => {
    if (!isHovering || frames.length <= 1) {
      setActiveIndex(0);
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % frames.length);
    }, 230);

    return () => clearInterval(interval);
  }, [frames.length, isHovering]);

  if (!frames.length) {
    return (
      <div className="flex h-full items-center justify-center bg-white px-6 text-center text-sm text-gray-400">
        Project visual coming soon
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={`${frames[activeIndex]}-${activeIndex}`}
          src={frames[activeIndex]}
          alt={title}
          className="h-full w-full object-cover"
          initial={{ opacity: 0.2, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
    </div>
  );
}
