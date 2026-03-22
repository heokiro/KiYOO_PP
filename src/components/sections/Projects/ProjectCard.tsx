import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../../types/content.types';
import * as S from './styles';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <S.CardWrapper onClick={onClick}>
      <S.CardImage>
        <img src={project.thumbnail} alt={project.title} loading="lazy" />

        {/* Hover Overlay */}
        <S.CardOverlay>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.OverlayCategory>{project.categories.join(' / ')}</S.OverlayCategory>
            <S.OverlayTitle>{project.title}</S.OverlayTitle>
            <S.OverlayTechStack>
              {project.technologies.slice(0, 3).map((tech) => (
                <S.OverlayTechBadge key={tech}>{tech}</S.OverlayTechBadge>
              ))}
            </S.OverlayTechStack>
            <S.ViewButton>View Project</S.ViewButton>
          </motion.div>
        </S.CardOverlay>
      </S.CardImage>

    </S.CardWrapper>
  );
};
