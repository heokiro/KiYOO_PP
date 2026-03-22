import type { SkillsData, SkillGroup } from '../../types/content.types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'hardware',
    title: '하드웨어',
    icon: 'cpu',
    skills: [
      { name: 'Arduino', level: 95, icon: 'arduino' },
      { name: 'ESP32', level: 95, icon: 'esp32' },
      { name: 'RealSense', level: 85, icon: 'camera' },
      { name: 'LiDAR', level: 80, icon: 'sensor' },
      { name: '회로 설계', level: 85, icon: 'circuit' },
    ],
  },
  {
    id: 'software',
    title: '소프트웨어',
    icon: 'code',
    skills: [
      { name: 'Unity', level: 90, icon: 'unity' },
      { name: 'Python', level: 85, icon: 'python' },
      { name: 'TypeScript', level: 80, icon: 'typescript' },
      { name: 'Firebase', level: 90, icon: 'firebase' },
      { name: 'Web Dev', level: 85, icon: 'web' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: 'brain',
    skills: [
      { name: 'YOLO', level: 80, icon: 'yolo' },
      { name: 'GPT / LLM', level: 85, icon: 'gpt' },
      { name: 'RAG', level: 80, icon: 'rag' },
      { name: 'Vector Store', level: 75, icon: 'database' },
    ],
  },
];

export const skillsData: SkillsData = {
  title: 'Skills',
  subtitle: '프로젝트에 활용하는 기술들',
  groups: skillGroups,

  display: {
    showLevel: true,
    showPercentage: false,
    layout: 'cards',
    animate: true,
  },
};
