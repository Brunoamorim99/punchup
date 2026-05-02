import { InertiaProjectCarousel } from '../components/InertiaProjectCarousel';
import { HeroSection } from '../components/sections/HeroSection';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { carouselProjects } from '../data/carouselProjects';

type HomePageProps = {
  startSection?: 'home' | 'portfolio';
};

export function HomePage({ startSection = 'home' }: HomePageProps) {
  const portfolioRef = useScrollToSection<HTMLDivElement>({
    shouldScroll: startSection === 'portfolio',
  });

  return (
    <>
      <HeroSection />
      <div ref={portfolioRef}>
        <InertiaProjectCarousel
          projects={carouselProjects}
          sectionId="portfolio"
        />
      </div>
    </>
  );
}
