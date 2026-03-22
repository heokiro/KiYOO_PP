// 환경 변수에 따라 콘텐츠 폴더 선택
const CONTENT_NAME = import.meta.env.VITE_CONTENT || '_default';

// 동적 import를 위한 콘텐츠 맵
const contentModules = import.meta.glob('./**/index.ts', { eager: true });

// 선택된 콘텐츠 모듈 가져오기
const selectedModule = contentModules[`./${CONTENT_NAME}/index.ts`] as {
  profile: typeof import('./_default/profile').profile;
  hero: typeof import('./_default/hero').hero;
  about: typeof import('./_default/about').about;
  projectsData: typeof import('./_default/projects').projectsData;
  projects: typeof import('./_default/projects').projects;
  projectCategories: typeof import('./_default/projects').projectCategories;
  projectSkills: typeof import('./_default/projects').projectSkills;
  skillsData: typeof import('./_default/skills').skillsData;
  skillGroups: typeof import('./_default/skills').skillGroups;
  contact: typeof import('./_default/contact').contact;
};

if (!selectedModule) {
  throw new Error(`Content "${CONTENT_NAME}" not found. Available: _default, kiro, yooni`);
}

export const { profile, hero, about, projectsData, projects, projectCategories, projectSkills, skillsData, skillGroups, contact } = selectedModule;

export const siteContent = {
  profile,
  hero,
  about,
  projects: projectsData,
  skills: skillsData,
  contact,
};
