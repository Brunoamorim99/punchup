import { carouselProjects } from '../data/carouselProjects';
import { InertiaProjectCarousel } from '../components/InertiaProjectCarousel';

export function PortfolioPage() {
  return <InertiaProjectCarousel projects={carouselProjects} />;
}

