import { useEffect, useRef } from 'react';

type UseScrollToSectionOptions = {
  shouldScroll: boolean;
  delayMs?: number;
  block?: ScrollLogicalPosition;
};

export function useScrollToSection<T extends HTMLElement>({
  shouldScroll,
  delayMs = 140,
  block = 'start',
}: UseScrollToSectionOptions) {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!shouldScroll) return;
    const timeout = window.setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth', block });
    }, delayMs);

    return () => window.clearTimeout(timeout);
  }, [shouldScroll, delayMs, block]);

  return targetRef;
}
