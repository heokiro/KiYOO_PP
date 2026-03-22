import type { AboutData } from '../../types/content.types';

export const about: AboutData = {
  title: 'About Me',
  subtitle: 'Get to know me better',

  image: '/assets/images/profile.jpg',
  imageAlt: 'Profile photo',

  paragraphs: [
    `Hello! I'm a passionate developer with 5+ years of experience creating web applications and digital experiences.`,
    `I specialize in React, TypeScript, and modern frontend technologies. I believe in clean code and user-centered design.`,
    `When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.`,
  ],

  highlights: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
  ],

  resume: {
    show: true,
    href: '/assets/resume.pdf',
    text: 'Download Resume',
  },
};
