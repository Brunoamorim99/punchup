import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';
import { useScrollToSection } from '../hooks/useScrollToSection';

type AboutPageProps = {
  startSection?: 'about' | 'contact';
};

export function AboutPage({ startSection = 'about' }: AboutPageProps) {
  const contactRef = useScrollToSection<HTMLElement>({
    shouldScroll: startSection === 'contact',
    delayMs: 120,
  });

  return (
    <div className="px-6 pb-20">
      <div className="mx-auto max-w-6xl pt-24">
        <AboutSection />
        <ContactSection ref={contactRef} />
      </div>
    </div>
  );
}
