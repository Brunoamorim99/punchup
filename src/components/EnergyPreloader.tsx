import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type EnergyPreloaderProps = {
  onComplete: () => void;
};

export function EnergyPreloader({ onComplete }: EnergyPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const targetProgressRef = useRef(20);
  const doneRef = useRef(false);

  const progressLabel = useMemo(() => `${Math.round(progress)}%`, [progress]);

  useEffect(() => {
    const updateReadyTarget = () => {
      if (document.readyState === 'loading') targetProgressRef.current = 35;
      if (document.readyState === 'interactive') targetProgressRef.current = 75;
      if (document.readyState === 'complete') targetProgressRef.current = 100;
    };

    const onReadyStateChange = () => updateReadyTarget();
    const onWindowLoad = () => {
      targetProgressRef.current = 100;
    };

    updateReadyTarget();
    document.addEventListener('readystatechange', onReadyStateChange);
    window.addEventListener('load', onWindowLoad);

    const interval = window.setInterval(() => {
      setProgress((current) => {
        const target = targetProgressRef.current;
        const easedStep = Math.max(0.8, (target - current) * 0.12);
        const next = Math.min(target, current + easedStep);
        return next >= 99.5 ? 100 : next;
      });
    }, 28);

    return () => {
      clearInterval(interval);
      document.removeEventListener('readystatechange', onReadyStateChange);
      window.removeEventListener('load', onWindowLoad);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || doneRef.current) return;
    doneRef.current = true;
    const timeout = window.setTimeout(() => setIsVisible(false), 420);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        onComplete();
      }}
    >
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
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
