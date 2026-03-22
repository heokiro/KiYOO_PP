import type { ProfileData } from '../../types/content.types';

export const profile: ProfileData = {
  name: 'Your Name',
  title: 'Full-Stack Developer',
  tagline: 'Building digital experiences',

  social: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'hello@example.com',
    portfolio: 'https://yoursite.com',
  },

  meta: {
    siteTitle: 'Your Name | Portfolio',
    description: 'Portfolio of Your Name - Developer & Designer',
    keywords: ['developer', 'portfolio', 'react', 'frontend'],
    ogImage: '/assets/og-image.png',
  },
};
