import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type EnergyPreloaderProps = {
  onComplete: () => void;
};

/** Progress targets for each document readyState so the bar feels responsive. */
const READY_STATE_TARGETS = {
  initial: 20,
  loading: 35,
  interactive: 75,
  complete: 100,
} as const;

/** How often the progress value is stepped toward its target, in ms. */
const PROGRESS_TICK_INTERVAL_MS = 28;

/** How aggressively the bar closes the gap to its target each tick. */
const PROGRESS_EASING_RATIO = 0.12;

/** Minimum forward movement per tick so the bar never visually stalls. */
const MIN_STEP_PERCENT = 0.8;

/** Threshold at which we snap to 100 rather than crawl the last decimals. */
const SNAP_TO_COMPLETE_AT = 99.5;

/** Delay after reaching 100 % before the preloader fades out. */
const FADE_OUT_DELAY_MS = 420;

/** How long the preloader itself fades out. */
const FADE_OUT_SECONDS = 0.35;

/** Clip-reveal animation used when the preloader wipes off-screen. */
const WIPE_SECONDS = 0.7;
const WIPE_EASING: [number, number, number, number] = [0.2, 0.9, 0.2, 1];

export function EnergyPreloader({ onComplete }: EnergyPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const targetProgressRef = useRef<number>(READY_STATE_TARGETS.initial);
  const hasFinishedRef = useRef(false);

  const progressLabel = useMemo(() => `${Math.round(progress)}%`, [progress]);

  useEffect(() => {
    const syncTargetToReadyState = () => {
      if (document.readyState === 'loading') {
        targetProgressRef.current = READY_STATE_TARGETS.loading;
      } else if (document.readyState === 'interactive') {
        targetProgressRef.current = READY_STATE_TARGETS.interactive;
      } else if (document.readyState === 'complete') {
        targetProgressRef.current = READY_STATE_TARGETS.complete;
      }
    };

    const handleWindowLoad = () => {
      targetProgressRef.current = READY_STATE_TARGETS.complete;
    };

    syncTargetToReadyState();
    document.addEventListener('readystatechange', syncTargetToReadyState);
    window.addEventListener('load', handleWindowLoad);

    const tickInterval = window.setInterval(() => {
      setProgress((currentProgress) => {
        const target = targetProgressRef.current;
        const easedStep = Math.max(
          MIN_STEP_PERCENT,
          (target - currentProgress) * PROGRESS_EASING_RATIO,
        );
        const nextProgress = Math.min(target, currentProgress + easedStep);
        return nextProgress >= SNAP_TO_COMPLETE_AT ? 100 : nextProgress;
      });
    }, PROGRESS_TICK_INTERVAL_MS);

    return () => {
      clearInterval(tickInterval);
      document.removeEventListener('readystatechange', syncTargetToReadyState);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    const hideTimeout = window.setTimeout(
      () => setIsVisible(false),
      FADE_OUT_DELAY_MS,
    );
    return () => clearTimeout(hideTimeout);
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_SECONDS, ease: 'easeOut' }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: WIPE_SECONDS, ease: WIPE_EASING }}
            className="w-[min(620px,86vw)] space-y-5"
          >
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>
            <div className="flex items-center justify-between text-xs tracking-[0.2em] text-white/70">
              <span>ENERGY BAR</span>
              <span>{progressLabel}</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
