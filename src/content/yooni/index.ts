export { profile } from './profile';
export { hero } from './hero';
export { about } from './about';
export { projectsData, projects, projectCategories, projectSkills } from './projects';
export { skillsData, skillGroups } from './skills';
export { contact } from './contact';

import { profile } from './profile';
import { hero } from './hero';
import { about } from './about';
import { projectsData } from './projects';
import { skillsData } from './skills';
import { contact } from './contact';

export const siteContent = {
  profile,
  hero,
  about,
  projects: projectsData,
  skills: skillsData,
  contact,
};
