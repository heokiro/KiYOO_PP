import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../../../types/content.types';
import { Button } from '../../common';
import { MediaCarousel } from './MediaCarousel';
import * as S from './styles';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOverlayClick}
    >
      <S.ModalContent
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <MediaCarousel
          thumbnail={project.thumbnail}
          media={project.media}
          title={project.title}
        />

        <S.ModalBody>
          <S.ModalHeader>
            <div>
              <S.CardCategory>{project.categories.join(' / ')}</S.CardCategory>
              <S.ModalTitle>{project.title}</S.ModalTitle>
            </div>
            <S.CloseButton onClick={onClose}>
              <FiX size={20} />
            </S.CloseButton>
          </S.ModalHeader>

          <S.ModalDescription>
            {project.fullDescription || project.shortDescription}
          </S.ModalDescription>

          <S.TechStack style={{ marginBottom: '1.5rem' }}>
            {project.technologies.map((tech) => (
              <S.TechBadge key={tech}>{tech}</S.TechBadge>
            ))}
          </S.TechStack>

          <S.ModalLinks>
            {project.links.live && (
              <Button
                as="a"
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                <FiExternalLink />
                Live Demo
              </Button>
            )}
            {project.links.github && (
              <Button
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <FiGithub />
                View Code
              </Button>
            )}
          </S.ModalLinks>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
