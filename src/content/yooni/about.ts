import type { CapabilitiesData } from '../../types/content.types';

export const about: CapabilitiesData = {
  heading: 'Building digital experiences\nwith modern technologies.',
  items: [
    {
      title: 'Frontend Development',
      tools: [
        { name: 'React', icon: 'SiReact' },
        { name: 'TypeScript', icon: 'SiTypescript' },
      ],
      descriptionEn:
        'Creating responsive, performant web applications with modern frameworks and best practices.',
      descriptionKo:
        '모던 프레임워크와 최신 기술로 반응형 고성능 웹 애플리케이션을 개발합니다.',
    },
    {
      title: 'Backend Development',
      tools: [
        { name: 'Node.js', icon: 'SiNodedotjs' },
        { name: 'Python', icon: 'SiPython' },
      ],
      descriptionEn:
        'Designing scalable server-side solutions with robust APIs and database architecture.',
      descriptionKo:
        '확장 가능한 서버 아키텍처와 API 설계로 안정적인 백엔드 시스템을 구축합니다.',
    },
    {
      title: 'UI/UX Design',
      tools: [
        { name: 'Figma', icon: 'SiFigma' },
        { name: 'Adobe XD', icon: 'SiAdobexd' },
      ],
      descriptionEn:
        'Crafting intuitive user interfaces with attention to detail and user-centered design principles.',
      descriptionKo:
        '사용자 중심 디자인 원칙에 따라 직관적인 UI를 설계합니다.',
    },
    {
      title: 'DevOps & Cloud',
      tools: [
        { name: 'Docker', icon: 'SiDocker' },
        { name: 'AWS', icon: 'SiAmazonwebservices' },
      ],
      descriptionEn:
        'Deploying and managing applications with modern cloud infrastructure and CI/CD pipelines.',
      descriptionKo:
        '클라우드 인프라와 CI/CD 파이프라인으로 애플리케이션을 배포하고 관리합니다.',
    },
  ],
};
