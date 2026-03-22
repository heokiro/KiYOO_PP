import type { HeroData } from '../../types/content.types';

export const hero: HeroData = {
  greeting: 'Hello, I am',
  name: 'Yooni',
  roles: ['UX Designer', 'Frontend Developer', 'Visual Artist'],
  description:
    'I design and build user-centered digital products. Combining creativity with technical skills to deliver exceptional experiences.',

  image: '/assets/images/hero-image.png',
  imageAlt: 'Yooni',

  cta: {
    primary: {
      text: 'View Projects',
      href: '#projects',
    },
    secondary: {
      text: 'Contact Me',
      href: '#contact',
    },
  },

  background: {
    type: 'gradient',
    value: 'linear-gradient(135deg, rgba(84, 101, 255, 0.1) 0%, rgba(104, 237, 0, 0.1) 100%)',
  },
};
