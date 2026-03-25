import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Github, Instagram, Linkedin, Mail, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type AboutPageProps = {
  startSection?: 'about' | 'contact';
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export function AboutPage({ startSection = 'about' }: AboutPageProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (startSection !== 'contact') return;
    const timeout = window.setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timeout);
  }, [startSection]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <div className="px-6 pb-20">
      <div className="mx-auto max-w-6xl pt-24">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
        >
          <motion.div variants={reveal}>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About me
            </h1>
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
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-pink-500 to-amber-400 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg hover:brightness-110"
              >
                Read my full story
              </button>
              <a
                href="/resume-march-3-final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                View my resume
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400 p-[2px]"
          >
            <div className="relative h-full overflow-hidden rounded-3xl bg-white">
              <img
                src="/profile-photo.png"
                alt="Bruno Amorim dos Santos"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 28%', transform: 'scale(1.25)' }}
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          ref={contactRef}
          id="contact-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={reveal}
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
            <motion.section variants={reveal}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-black dark:text-gray-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-black dark:text-gray-100"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-black dark:text-gray-100"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-black dark:text-gray-100"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:bg-emerald-600 disabled:hover:bg-emerald-600"
                >
                  {submitted ? 'Message sent!' : 'Send message'}
                </button>
              </form>
            </motion.section>

            <motion.section variants={reveal} className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Get in touch</h3>
                <div className="mt-5 space-y-3">
                  <a
                    href="mailto:bamorimdossantos@my.bcit.ca"
                    className="flex items-center gap-4 text-sm text-gray-600 transition hover:text-gray-900"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-700">
                      <Mail className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-gray-900">Email</span>
                      <span className="block text-xs">bamorimdossantos@my.bcit.ca</span>
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Follow me</h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/bruno-amorim-dos-santos-13834b336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/bruno._.amorim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Brunoamorim99"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-7 dark:bg-[#050509]">
                <h4 className="text-base font-semibold text-gray-900">Looking for a designer?</h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  I&apos;m available for freelance collaborations and full-time
                  roles. I can help with UX/UI design, product design, design
                  systems, and user research.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.section>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
              My full story
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                I was born in Brazil and moved to Atlanta, Georgia as a
                teenager. Growing up across cultures taught me to pay attention
                to context, communication, and how different people experience
                the same product.
              </p>
              <p>
                Later I studied in Gent, Belgium and now I&apos;m in Vancouver,
                Canada, continuing to explore new perspectives and design
                practices. That mix of places shaped how I think about users:
                no one is truly &quot;average&quot;, and good design makes room
                for that diversity.
              </p>
              <p>
                I&apos;m driven by curiosity and a desire to make digital
                products feel less intimidating and more human. Whether it&apos;s
                a complex workflow, a new idea, or a small interface, I enjoy
                collaborating with others to get from rough concept to refined
                experience.
              </p>
              <p>
                If you&apos;re looking for someone who brings both craft and
                openness to feedback, I&apos;d love to connect.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

