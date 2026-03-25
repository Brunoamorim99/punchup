import { projects } from '../data/projects';
import { InertiaProjectCarousel } from '../components/InertiaProjectCarousel';

export function PortfolioPage() {
  return <InertiaProjectCarousel projects={projects} />;
}

