import { useState } from 'react';
import { X } from 'lucide-react';

export function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 pb-20">
      <div className="mx-auto max-w-6xl pt-24">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
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
          </div>

          <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400 p-[2px]">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white">
              <img
                src="/profile-photo.png"
                alt="Bruno Amorim dos Santos"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 28%', transform: 'scale(1.25)' }}
              />
            </div>
          </div>
        </section>
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

