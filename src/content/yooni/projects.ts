import type { ProjectsData, Project, ProjectCategory, ProjectSkill } from '../../types/content.types';

export const projectCategories: readonly ProjectCategory[] = [
  { id: 'software', label: 'Software', icon: 'code' },
  { id: 'lecture', label: 'Lectures', icon: 'presentation' },
  { id: 'exhibition', label: 'Exhibitions', icon: 'gallery' },
  { id: 'design', label: 'Design', icon: 'palette' },
  { id: 'research', label: 'Research', icon: 'book' },
];

export const projectSkills: readonly ProjectSkill[] = [
  { id: 'react', label: 'React', icon: 'react' },
  { id: 'node', label: 'Node.js', icon: 'node' },
  { id: 'python', label: 'Python', icon: 'python' },
  { id: 'ai', label: 'AI/ML', icon: 'brain' },
  { id: 'design', label: 'Design', icon: 'palette' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    categories: ['software'],
    skills: ['react', 'node'],
    thumbnail: '/assets/images/project1.jpg',
    media: [
      { type: 'image', url: '/assets/images/project1-1.jpg' },
      { type: 'image', url: '/assets/images/project1-2.jpg' },
    ],
    shortDescription: 'Full-stack e-commerce solution with React and Node.js',
    fullDescription: `A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product management, shopping cart, and payment integration.`,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/user/project',
    },
    date: '2024-06',
    status: 'completed',
  },
  {
    id: 'project-2',
    title: 'React Masterclass',
    categories: ['lecture'],
    skills: ['react'],
    thumbnail: '/assets/images/lecture1.jpg',

    shortDescription: 'Comprehensive React course for beginners to advanced',
    fullDescription: `A 20-hour video course covering React fundamentals, hooks, state management, and advanced patterns.`,
    technologies: ['React', 'TypeScript', 'Redux'],
    links: {
      live: 'https://udemy.com/course/xxx',
    },
    date: '2024-03',
    status: 'completed',
    extra: {
      duration: '20 hours',
      students: '1,500+',
      rating: 4.8,
    },
  },
  {
    id: 'project-3',
    title: 'Digital Art Exhibition',
    categories: ['exhibition'],
    skills: ['react'],
    thumbnail: '/assets/images/exhibition1.jpg',
    media: [
      { type: 'image', url: '/assets/images/exhibition1-1.jpg' },
      { type: 'image', url: '/assets/images/exhibition1-2.jpg' },
    ],
    shortDescription: 'Interactive digital art installation',
    fullDescription: `An immersive digital art experience exploring the intersection of technology and human emotion.`,
    technologies: ['Three.js', 'WebGL', 'Arduino'],
    links: {},
    date: '2024-01',
    status: 'completed',
    extra: {
      venue: 'Seoul Art Center',
      period: 'Jan 15 - Feb 28, 2024',
      visitors: '5,000+',
    },
  },
  {
    id: 'project-4',
    title: 'Mobile App UI Kit',
    categories: ['design'],
    skills: ['design'],
    thumbnail: '/assets/images/design1.jpg',

    shortDescription: 'Modern UI kit for mobile applications',
    fullDescription: `A comprehensive UI kit featuring 100+ components, dark/light themes, and customizable design tokens.`,
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    links: {
      live: 'https://figma.com/file/xxx',
    },
    date: '2023-12',
    status: 'completed',
  },
  {
    id: 'project-5',
    title: 'AI Research Paper',
    categories: ['research'],
    skills: ['python', 'ai'],
    thumbnail: '/assets/images/research1.jpg',

    shortDescription: 'Machine learning research on natural language processing',
    fullDescription: `Published research paper on advanced NLP techniques for sentiment analysis.`,
    technologies: ['Python', 'TensorFlow', 'NLP'],
    links: {
      documentation: 'https://arxiv.org/abs/xxx',
    },
    date: '2023-09',
    status: 'completed',
    extra: {
      conference: 'NeurIPS 2023',
      citations: 25,
    },
  },
  {
    id: 'project-6',
    title: 'Portfolio Website',
    categories: ['software'],
    skills: ['react'],
    thumbnail: '/assets/images/project2.jpg',

    shortDescription: 'Personal portfolio built with React and styled-components',
    fullDescription: `A modern, responsive portfolio website featuring smooth animations and dark mode support.`,
    technologies: ['React', 'TypeScript', 'styled-components', 'Framer Motion'],
    links: {
      github: 'https://github.com/user/portfolio',
      live: 'https://yoursite.com',
    },
    date: '2024-02',
    status: 'completed',
  },
];

export const projectsData: ProjectsData = {
  title: 'My Work',
  subtitle: 'A collection of my recent projects',
  categories: projectCategories,
  skillFilters: projectSkills,
  items: projects,

  display: {
    showFilter: true,
    itemsPerPage: 6,
    layout: 'grid',
  },
};
