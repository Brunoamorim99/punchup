import { useEffect } from 'react';
import type { MutableRefObject, RefObject } from 'react';

type RevealTarget = RefObject<HTMLElement | null> | MutableRefObject<HTMLElement | null>;

type UseStaggeredRevealOptions = {
  /** Refs to reveal, in the order they should appear. */
  targets: RevealTarget[];
  /** Time between each element's reveal, in ms. */
  stepDelayMs?: number;
  /** Duration of each element's fade + slide, in seconds. */
  durationSeconds?: number;
  /** Vertical offset in px that elements slide up from. */
  offsetY?: number;
};

const DEFAULT_STEP_DELAY_MS = 120;
const DEFAULT_DURATION_SECONDS = 0.7;
const DEFAULT_OFFSET_Y_PX = 28;

/**
 * Animates a list of refs into view one after the other on mount.
 * Uses inline styles + requestAnimationFrame so it's independent of any
 * animation library and safe for reduced-motion overrides in the future.
 */
export function useStaggeredReveal({
  targets,
  stepDelayMs = DEFAULT_STEP_DELAY_MS,
  durationSeconds = DEFAULT_DURATION_SECONDS,
  offsetY = DEFAULT_OFFSET_Y_PX,
}: UseStaggeredRevealOptions) {
  useEffect(() => {
    targets.forEach((target, position) => {
      const element = target.current;
      if (!element) return;

      const delayMs = position * stepDelayMs;
      element.style.opacity = '0';
      element.style.transform = `translateY(${offsetY}px)`;
      element.style.transition = `opacity ${durationSeconds}s ease ${delayMs}ms, transform ${durationSeconds}s ease ${delayMs}ms`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        });
      });
    });
  }, [targets, stepDelayMs, durationSeconds, offsetY]);
}
