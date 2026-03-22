import type { SkillsData, SkillGroup } from '../../types/content.types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'monitor',
    skills: [
      { name: 'React', level: 95, icon: 'react' },
      { name: 'TypeScript', level: 90, icon: 'typescript' },
      { name: 'Next.js', level: 85, icon: 'nextjs' },
      { name: 'CSS/SCSS', level: 90, icon: 'css' },
      { name: 'Tailwind CSS', level: 85, icon: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 85, icon: 'nodejs' },
      { name: 'Python', level: 75, icon: 'python' },
      { name: 'PostgreSQL', level: 80, icon: 'postgresql' },
      { name: 'MongoDB', level: 75, icon: 'mongodb' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    icon: 'tool',
    skills: [
      { name: 'Git', level: 90, icon: 'git' },
      { name: 'Docker', level: 70, icon: 'docker' },
      { name: 'Figma', level: 80, icon: 'figma' },
      { name: 'AWS', level: 65, icon: 'aws' },
    ],
  },
];

export const skillsData: SkillsData = {
  title: 'Skills & Expertise',
  subtitle: 'Technologies I work with',
  groups: skillGroups,

  display: {
    showLevel: true,
    showPercentage: false,
    layout: 'cards',
    animate: true,
  },
};
