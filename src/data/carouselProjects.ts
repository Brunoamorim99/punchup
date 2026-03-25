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
    title: 'Aidile',
    description: 'STRATA management app for modern living.',
    brandColor: '#FCE4EC',
    heroImage: '/assets/aidile-main.png',
    processImages: ['/assets/aidile-sketch.png', '/assets/aidile-components.png'],
    link: '/portfolio/aidile-project',
  },
];
