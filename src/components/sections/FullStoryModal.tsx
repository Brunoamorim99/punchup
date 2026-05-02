import { useEffect } from 'react';
import { X } from 'lucide-react';
import { fullStoryParagraphs } from '../../data/siteContent';

type FullStoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FullStoryModal({ isOpen, onClose }: FullStoryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="full-story-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close full story"
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="full-story-title" className="mb-6 text-2xl font-semibold md:text-3xl">
          My full story
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          {fullStoryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
