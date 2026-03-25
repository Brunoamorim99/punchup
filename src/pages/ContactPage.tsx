import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <div className="px-6 pb-20">
      <div className="mx-auto max-w-6xl pt-24">
        <header className="mb-14">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
        </header>

        <div className="grid gap-14 md:grid-cols-2">
          <section>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
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
          </section>

          <section className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Get in touch
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:bamorimdossantos@my.bcit.ca"
                  className="flex items-center gap-4 text-sm text-gray-600 transition hover:text-gray-900"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-700">
                    <Mail className="h-5 w-5 text-white" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-900">
                      Email
                    </span>
                    <span className="block text-xs">
                      bamorimdossantos@my.bcit.ca
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Follow me
              </h2>
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

            <div className="rounded-2xl bg-gray-50 p-7">
              <h3 className="text-base font-semibold text-gray-900">
                Looking for a designer?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                I&apos;m available for freelance collaborations and full-time
                roles. I can help with UX/UI design, product design, design
                systems, and user research.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
