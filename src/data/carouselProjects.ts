export interface CarouselProject {
  id: string;
  title: string;
  description: string;
  brandColor: string;
  heroImage: string;
  processImages: string[];
  link: string;
}

export const carouselProjects: CarouselProject[] = [
  {
    id: '01',
    title: 'Panday',
    description: 'Interactive AI roadmap for trade students.',
    brandColor: '#E0F2F1',
    heroImage: '/assets/panday-main.png',
    processImages: [
      '/assets/panday-wireframe.png',
      '/assets/panday-userflow.png',
      '/assets/panday-prototype.png',
    ],
    link: '/portfolio/panday-project',
  },
  {
    id: '02',
    title: 'Museum Poster',
    description: 'Exhibition poster system inspired by Issey Miyake.',
    brandColor: '#ECEFF1',
    heroImage: '/museum-case-hero.png',
    processImages: [
      '/museum-detail-01.png',
      '/museum-detail-03.png',
      '/museum-detail-05.png',
    ],
    link: '/portfolio/issey-miyake-poster',
  },
  {
    id: '03',
    title: 'Aidile',
    description: 'STRATA management app for modern living.',
    brandColor: '#FCE4EC',
    heroImage: '/assets/aidile-main.png',
    processImages: ['/assets/aidile-sketch.png', '/assets/aidile-components.png'],
    link: '/portfolio/aidile-project',
  },
  {
    id: '04',
    title: 'Bandit Breakout',
    description: 'Narrative board game experience with atmospheric design.',
    brandColor: '#E8EAF6',
    heroImage: '/bandit-case-hero.png',
    processImages: [
      '/bandit-detail-02.png',
      '/bandit-detail-04.png',
      '/bandit-detail-06.png',
    ],
    link: '/portfolio/bandit-breakout',
  },
];
