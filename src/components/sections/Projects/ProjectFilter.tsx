import React from 'react';
import type { ProjectCategory, ProjectSkill } from '../../../types/content.types';
import * as S from './styles';

interface ProjectFilterProps {
  categories: readonly ProjectCategory[];
  skills: readonly ProjectSkill[];
  selectedCategories: string[];
  selectedSkills: string[];
  onCategoryToggle: (categoryId: string) => void;
  onSkillToggle: (skillId: string) => void;
  onCategoryAllToggle: () => void;
  onSkillAllToggle: () => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  skills,
  selectedCategories,
  selectedSkills,
  onCategoryToggle,
  onSkillToggle,
  onCategoryAllToggle,
  onSkillAllToggle,
}) => {
  const allCategoriesSelected = selectedCategories.length === categories.length;
  const allSkillsSelected = selectedSkills.length === skills.length;

  return (
    <S.FilterContainer>
      <S.FilterGroup>
        <S.FilterLabel>Category</S.FilterLabel>
        <S.FilterWrapper>
          <S.FilterButton
            $active={allCategoriesSelected}
            onClick={onCategoryAllToggle}
          >
            All
          </S.FilterButton>
          {categories.map((category) => (
            <S.FilterButton
              key={category.id}
              $active={selectedCategories.includes(category.id)}
              onClick={() => onCategoryToggle(category.id)}
            >
              {category.label}
            </S.FilterButton>
          ))}
        </S.FilterWrapper>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterLabel>Skills</S.FilterLabel>
        <S.FilterWrapper>
          <S.FilterButton
            $active={allSkillsSelected}
            onClick={onSkillAllToggle}
          >
            All
          </S.FilterButton>
          {skills.map((skill) => (
            <S.FilterButton
              key={skill.id}
              $active={selectedSkills.includes(skill.id)}
              onClick={() => onSkillToggle(skill.id)}
            >
              {skill.label}
            </S.FilterButton>
          ))}
        </S.FilterWrapper>
      </S.FilterGroup>
    </S.FilterContainer>
  );
};
