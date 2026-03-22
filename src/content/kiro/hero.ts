import type { HeroData } from '../../types/content.types';

export const hero: HeroData = {
  greeting: 'HeoKiro',
  name: '허재혁',
  roles: ['Developer', 'Media Artist', 'Hardware Engineer', 'Instructor'],
  description:
    'Arduino, Unity, AI를 활용해 전시와 설치 미술을 위한 인터랙티브 시스템을 개발합니다. 기술과 예술의 경계에서 관객과 작품 사이의 새로운 경험을 만들어갑니다.',

  cta: {
    primary: {
      text: 'Projects',
      href: '#projects',
    },
    secondary: {
      text: 'Contact',
      href: '#contact',
    },
  },

  background: {
    type: 'gradient',
    value: 'linear-gradient(135deg, rgba(84, 101, 255, 0.1) 0%, rgba(104, 237, 0, 0.1) 100%)',
  },
};
