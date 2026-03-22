import type { HeroData } from '../../types/content.types';

export const hero: HeroData = {
  greeting: 'Hi, I am',
  name: 'Your Name',
  roles: ['Developer', 'Designer', 'Creator'],
  description:
    'I create beautiful digital experiences that inspire and engage users. Passionate about clean code and innovative solutions.',

  image: '/assets/images/hero-image.png',
  imageAlt: 'Hero Image',

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
