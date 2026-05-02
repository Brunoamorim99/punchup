import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { contactEmail } from '../../data/siteContent';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export const ContactSection = forwardRef<HTMLElement>(function ContactSection(
  _props,
  ref,
) {
  return (
    <motion.section
      ref={ref}
      id="contact-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealVariants}
      className="mt-28 border-t border-gray-200 pt-16 dark:border-gray-800"
    >
      <header className="mb-14">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          Let&apos;s work together
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out.
        </p>
      </header>

      <div className="grid gap-14 md:grid-cols-2">
        <motion.section variants={revealVariants} aria-label="Contact form">
          <ContactForm />
        </motion.section>

        <motion.section variants={revealVariants} className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 text-sm text-gray-600 transition hover:text-gray-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-700">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-gray-900">
                    Email
                  </span>
                  <span className="block text-xs">{contactEmail}</span>
                </span>
              </a>
            </div>
          </div>

          <SocialLinks />

          <div className="rounded-2xl bg-gray-50 p-7 dark:bg-[#050509]">
            <h4 className="text-base font-semibold text-gray-900">
              Looking for a designer?
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              I&apos;m available for freelance collaborations and full-time
              roles. I can help with UX/UI design, product design, design
              systems, and user research.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
});
