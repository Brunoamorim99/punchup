import { useEffect, useState } from 'react';

type UseAutoplayOptions = {
  frameCount: number;
  intervalMs: number;
  isActive: boolean;
  onChange?: (index: number) => void;
};

export function useAutoplay({
  frameCount,
  intervalMs,
  isActive,
  onChange,
}: UseAutoplayOptions) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isActive || frameCount <= 1 || intervalMs <= 0) {
      setActiveIndex(0);
      onChange?.(0);
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % frameCount;
        onChange?.(next);
        return next;
      });
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [frameCount, intervalMs, isActive, onChange]);

  return activeIndex;
}
