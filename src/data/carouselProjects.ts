export interface CarouselProject {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  previewTags: string[];
  brandColor: string;
  heroImage: string;
  processImages: string[];
  link: string;
}

export const carouselProjects: CarouselProject[] = [
  {
    id: '01',
    title: 'Panday Project',
    category: 'Interactive AI Application',
    year: '2024',
    description:
      'Interactive AI road map guide designed for trade students, providing personalized learning paths and career guidance through an intuitive interface.',
    previewTags: ['UX Research', 'Product Development', 'UI Design'],
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
    title: 'Issey Miyake Design Museum Poster',
    category: 'Graphic Design',
    year: '2024',
    description:
      'A series of posters for a fictitious exhibition showcasing the work of Issey Miyake, connecting high fashion and everyday practicality.',
    previewTags: ['Graphic Design', 'Typography', 'Brand Identity'],
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
    title: 'Bandit Breakout Game',
    category: 'Interactive Game Design',
    year: '2024',
    description:
      'Interactive digital board game focusing on narrative, atmosphere, and gameplay flow.',
    previewTags: ['Game Design', 'UX Design', 'Sound Design'],
    brandColor: '#E8EAF6',
    heroImage: '/bandit-case-hero.png',
    processImages: [
      '/bandit-detail-02.png',
      '/bandit-detail-04.png',
      '/bandit-detail-06.png',
    ],
    link: '/portfolio/bandit-breakout',
  },
  {
    id: '04',
    title: 'Aidile Project',
    category: 'Mobile App Design',
    year: '2024',
    description:
      'Interactive app for apartment building STRATA management with a focus on vision, purpose, and marketability of the final product.',
    previewTags: ['Product Ideation', 'UI/UX Design', 'Market Research'],
    brandColor: '#FCE4EC',
    heroImage: '/assets/aidile-main.png',
    processImages: ['/assets/aidile-sketch.png', '/assets/aidile-components.png'],
    link: '/portfolio/aidile-project',
  },
];
