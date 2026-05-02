import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GradientButton } from '../ui/GradientButton';
import { FullStoryModal } from './FullStoryModal';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export function AboutSection() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={revealVariants}
        className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
      >
        <motion.div variants={revealVariants}>
          <header>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About me
            </h1>
          </header>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            I&apos;m Bruno Amorim dos Santos, a UX/UI designer with a strong
            foundation in design principles, usability, and user-centered
            thinking. I care about turning ideas into interfaces that feel
            effortless to use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            My work lives at the intersection of empathy, simplicity, and
            collaboration. I enjoy partnering with teams to align user needs
            with product and business goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <GradientButton type="button" onClick={() => setIsStoryOpen(true)}>
              Read my full story
            </GradientButton>
            <a
              href="/resume-march-3-final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              View my resume
            </a>
          </div>
        </motion.div>

        <motion.figure
          variants={revealVariants}
          className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400 p-[2px]"
        >
          <div className="relative h-full overflow-hidden rounded-3xl bg-white">
            <img
              src="/profile-photo.png"
              alt="Portrait of Bruno Amorim dos Santos"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 28%', transform: 'scale(1.25)' }}
            />
          </div>
        </motion.figure>
      </motion.section>

      <FullStoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </>
  );
}
