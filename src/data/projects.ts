export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  brandColor?: string;
  image?: string;
  processImages?: string[];
  caseStudyHeroImage?: string;
  caseStudyImages?: string[];
  tags: string[];
  problem: string;
  challenges: string;
  solution: string;
  research: string;
  designProcess: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  impact: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'panday-project',
    title: 'Panday Project',
    brandColor: '#1D2E56',
    image: '/panday-logo.png',
    processImages: ['/panday-detail-04.png', '/panday-detail-05.png', '/panday-detail-07.png'],
    caseStudyHeroImage: '/panday-case-hero.png',
    caseStudyImages: [
      '/panday-detail-01.png',
      '/panday-detail-02.png',
      '/panday-detail-03.png',
      '/panday-detail-04.png',
      '/panday-detail-05.png',
      '/panday-detail-06.png',
      '/panday-detail-07.png',
    ],
    category: 'Interactive AI Application',
    year: '2024',
    description:
      'Interactive AI road map guide designed for trade students, providing personalized learning paths and career guidance through an intuitive interface.',
    tags: ['UX Research', 'Product Development', 'UI Design'],
    problem:
      'Trade students often face a guidance gap where information regarding apprenticeships, Red Seal requirements, and educational resources is decentralized and difficult to navigate.',
    challenges:
      'The project required translating complex certification steps into a user-friendly digital format while keeping the experience encouraging rather than overwhelming.',
    solution:
      'An interactive, AI-driven roadmap that acts as a central hub with step-by-step progress tracking and an intuitive UI, simplifying the journey from student to certified professional.',
    research:
      'Comprehensive product research identified friction points in the trade certification process and informed a personalized AI-driven user journey.',
    designProcess:
      'Defined the UX/UI strategy and visual language that turns complex regulatory roadmaps into intuitive, actionable steps for students.',
    keyFeatures: [
      {
        title: 'Interactive Chatbot Interface',
        description:
          'Provides real-time guidance and answers student questions throughout their certification journey.',
      },
      {
        title: 'Skill-Tracking Resource Tool',
        description:
          'Visualizes completed steps and upcoming requirements to support motivation and progress tracking.',
      },
      {
        title: 'Personalized AI-Driven Roadmap',
        description:
          'Builds customized certification paths based on student goals and trade requirements.',
      },
    ],
    impact:
      'The platform bridges the guidance gap for trade students by making complex certification processes accessible and manageable.',
    liveUrl: 'https://panday.app/',
  },
  {
    id: 2,
    slug: 'issey-miyake-poster',
    title: 'Issey Miyake Design Museum Poster',
    brandColor: '#3F3F45',
    image: '/issey-miyake-poster.png',
    processImages: ['/museum-detail-01.png', '/museum-detail-03.png', '/museum-detail-05.png'],
    caseStudyHeroImage: '/museum-case-hero.png',
    caseStudyImages: [
      '/museum-detail-01.png',
      '/museum-detail-02.png',
      '/museum-detail-03.png',
      '/museum-detail-04.png',
      '/museum-detail-05.png',
    ],
    category: 'Graphic Design',
    year: '2024',
    description:
      'A series of posters for a fictitious exhibition showcasing the work of Issey Miyake, connecting high fashion and everyday practicality.',
    tags: ['Graphic Design', 'Typography', 'Brand Identity'],
    problem:
      'High-fashion exhibits can feel unapproachable, failing to connect the artist\'s work to everyday life.',
    challenges:
      'The visual strategy needed to honor Miyake\'s "Pleats Please" aesthetic while preserving legibility for event promotion.',
    solution:
      'Posters that blend avant-garde typography with structured layouts to clearly communicate the exhibition theme.',
    research:
      'Studied Miyake\'s design philosophy and translated his "A Piece of Cloth" concept into visual assets.',
    designProcess:
      'Developed a cohesive visual identity using minimalist typography and geometric layouts reflecting his style.',
    keyFeatures: [
      {
        title: 'Minimalist Typography',
        description:
          'Clean, geometric compositions that echo Miyake\'s sculptural garments.',
      },
      {
        title: 'Curated Visual Narrative',
        description:
          'Poster series that builds a narrative around innovation and practicality.',
      },
    ],
    impact:
      'the final campaign bridges the gap between high-fashion artistry and public accessibility.',
    liveUrl: '/museum-poster-files.html',
  },
  {
    id: 3,
    slug: 'bandit-breakout',
    title: 'Bandit Breakout Game',
    brandColor: '#091437',
    image: '/bandit-logo.svg',
    processImages: ['/bandit-detail-02.png', '/bandit-detail-04.png', '/bandit-detail-06.png'],
    caseStudyHeroImage: '/bandit-case-hero.png',
    caseStudyImages: [
      '/bandit-detail-01.mp4',
      '/bandit-detail-02.png',
      '/bandit-detail-03.png',
      '/bandit-detail-04.png',
      '/bandit-detail-05.png',
      '/bandit-detail-06.png',
      '',
      '/bandit-detail-09.mov',
    ],
    category: 'Interactive Game Design',
    year: '2024',
    description:
      'Interactive digital board game focusing on narrative, atmosphere, and gameplay flow.',
    tags: ['Game Design', 'UX Design', 'Sound Design'],
    problem:
      'Many digital board games lack the rich atmosphere of physical tabletop experiences.',
    challenges:
      'Creating immersion in a limited digital canvas required tight integration between story, visuals, and interaction.',
    solution:
      'Atmospheric world-building with custom soundscapes and refined mechanics to deepen immersion.',
    research:
      'Narrative development and scenario design informed the game\'s structure and player journey.',
    designProcess:
      'Iterated on core mechanics and UI to smooth transitions between story beats and player actions.',
    keyFeatures: [
      {
        title: 'Custom Soundscapes',
        description:
          'Audio that heightens tension and emotional stakes throughout gameplay.',
      },
      {
        title: 'Narrative World-Building',
        description:
          'Rich plot structure, character scenarios, and environmental storytelling.',
      },
    ],
    impact:
      'The game recreates tabletop atmosphere in a digital format through cohesive design and sound.',
    liveUrl: 'https://bandit-breakout.vercel.app/',
  },
  {
    id: 4,
    slug: 'aidile-project',
    title: 'Aidile Project',
    brandColor: '#1D4462',
    image: '/aidile-logo.png',
    processImages: ['/aidile-detail-01.png', '/aidile-detail-03.png', '/aidile-detail-05.png'],
    caseStudyHeroImage: '/aidile-case-hero.png',
    caseStudyImages: [
      '/aidile-detail-01.png',
      '/aidile-detail-02.png',
      '/aidile-detail-03.png',
      '/aidile-detail-04.png',
      '/aidile-detail-05.png',
      '/aidile-detail-06.png',
    ],
    category: 'Mobile App Design',
    year: '2024',
    description:
      'Interactive app for apartment building STRATA management with a focus on vision, purpose, and marketability of the final product.',
    tags: ['Product Ideation', 'UI/UX Design', 'Market Research'],
    problem:
      'Strata management is often slowed by information silos and poor communication between residents and management.',
    challenges:
      'Designing an experience that works well for both managers and tenants within one product required balancing oversight with simplicity.',
    solution:
      'An integrated platform that centralizes maintenance requests and communication to streamline operations and increase transparency.',
    research:
      'Market analysis validated the value proposition and helped position the app between property managers and individual homeowners.',
    designProcess:
      'Led functional requirements such as a visual dashboard and smart notifications tailored to strata workflows.',
    keyFeatures: [
      {
        title: 'Visual Dashboard',
        description:
          'Gives strata councils and residents an at-a-glance view of building projects and requests.',
      },
      {
        title: 'Smart Notification System',
        description:
          'Improves communication and keeps everyone updated on key events and changes.',
      },
    ],
    impact:
      'High-fidelity wireframes and user flows position the app as a streamlined solution for modern apartment building governance.',
    liveUrl: 'https://comp-3170-project-iota.vercel.app/',
  },
];
