import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { about } from '../../../content';
import type { Highlight } from '../../../types/content.types';
import { Container, Button, Heading2 } from '../../common';
import { useScrollReveal } from '../../../hooks';
import * as S from './styles';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <S.AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.Header>
            <Heading2 gradient align="center">
              {about.title}
            </Heading2>
            {about.subtitle && <S.Subtitle>{about.subtitle}</S.Subtitle>}
          </S.Header>
        </motion.div>

        <S.Content>
          {about.image && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <S.ImageWrapper>
                <S.Image src={about.image} alt={about.imageAlt || 'Profile'} />
                <S.ImageOverlay />
              </S.ImageWrapper>
            </motion.div>
          )}

          <S.TextContent>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {about.paragraphs.map((paragraph: string, index: number) => (
                <S.Paragraph key={index}>{paragraph}</S.Paragraph>
              ))}

              {about.highlights && (
                <S.Highlights>
                  {about.highlights.map((highlight: Highlight, index: number) => (
                    <S.HighlightItem key={index}>
                      <S.HighlightValue>{highlight.value}</S.HighlightValue>
                      <S.HighlightLabel>{highlight.label}</S.HighlightLabel>
                    </S.HighlightItem>
                  ))}
                </S.Highlights>
              )}

              {about.resume?.show && (
                <Button
                  as="a"
                  href={about.resume.href}
                  download
                  variant="primary"
                  size="lg"
                >
                  <FiDownload />
                  {about.resume.text}
                </Button>
              )}
            </motion.div>
          </S.TextContent>
        </S.Content>
      </Container>
    </S.AboutSection>
  );
};
