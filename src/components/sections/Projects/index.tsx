import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../../content';
import { Container, Heading2 } from '../../common';
import { useScrollReveal } from '../../../hooks';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../../types/content.types';
import * as S from './styles';

export const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCategoryToggle = useCallback((categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  }, []);

  const handleSkillToggle = useCallback((skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  }, []);

  const handleCategoryAllToggle = useCallback(() => {
    const allCategoryIds = projectsData.categories.map((c) => c.id);
    setSelectedCategories((prev) =>
      prev.length === allCategoryIds.length ? [] : allCategoryIds
    );
  }, []);

  const handleSkillAllToggle = useCallback(() => {
    const allSkillIds = projectsData.skillFilters.map((s) => s.id);
    setSelectedSkills((prev) =>
      prev.length === allSkillIds.length ? [] : allSkillIds
    );
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.items.filter((project: Project) => {
      // 카테고리 필터: 선택된 게 없으면 전체 표시, 있으면 교집합
      const categoryMatch =
        selectedCategories.length === 0 ||
        project.categories.some((c) => selectedCategories.includes(c));

      // 스킬 필터: 선택된 게 없으면 전체 표시, 있으면 교집합
      const skillMatch =
        selectedSkills.length === 0 ||
        project.skills.some((s) => selectedSkills.includes(s));

      return categoryMatch && skillMatch;
    });
  }, [selectedCategories, selectedSkills]);

  return (
    <S.ProjectsSection id="projects" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.Header>
            <Heading2 gradient align="center">
              {projectsData.title}
            </Heading2>
            {projectsData.subtitle && <S.Subtitle>{projectsData.subtitle}</S.Subtitle>}
          </S.Header>
        </motion.div>

        {projectsData.display.showFilter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectFilter
              categories={projectsData.categories}
              skills={projectsData.skillFilters}
              selectedCategories={selectedCategories}
              selectedSkills={selectedSkills}
              onCategoryToggle={handleCategoryToggle}
              onSkillToggle={handleSkillToggle}
              onCategoryAllToggle={handleCategoryAllToggle}
              onSkillAllToggle={handleSkillAllToggle}
            />
          </motion.div>
        )}

        <S.Grid $layout={projectsData.display.layout}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </S.Grid>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </Container>
    </S.ProjectsSection>
  );
};
