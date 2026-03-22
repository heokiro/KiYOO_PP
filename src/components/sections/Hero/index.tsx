import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { hero, profile } from '../../../content';
import { Container, Button } from '../../common';
import * as S from './styles';

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = hero.roles || ['Developer'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <S.HeroSection id="hero">
      <Container>
        <S.HeroGrid $hasImage={!!hero.image}>
          {/* Left: Text Content */}
          <S.TextContent $centered={!hero.image}>
            {hero.greeting && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <S.Greeting>{hero.greeting}</S.Greeting>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <S.Name>{hero.name}</S.Name>
            </motion.div>

            {hero.roles && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <S.RoleWrapper>
                  <S.Role>
                    {displayText}
                    <S.Cursor>|</S.Cursor>
                  </S.Role>
                </S.RoleWrapper>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <S.Description>{hero.description}</S.Description>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <S.CTAGroup>
                {hero.cta.primary && (
                  <Button as="a" href={hero.cta.primary.href} variant="primary" size="lg">
                    {hero.cta.primary.text}
                  </Button>
                )}
                {hero.cta.secondary && (
                  <Button as="a" href={hero.cta.secondary.href} variant="outline" size="lg">
                    {hero.cta.secondary.text}
                  </Button>
                )}
              </S.CTAGroup>
            </motion.div>
          </S.TextContent>

          {/* Right: Image (conditional) */}
          {hero.image && (
            <S.ImageContent>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <S.HeroImageWrapper>
                  <S.HeroImage src={hero.image} alt={hero.imageAlt || profile.name} />
                  <S.ImageGlow />
                </S.HeroImageWrapper>
              </motion.div>
            </S.ImageContent>
          )}
        </S.HeroGrid>
      </Container>

      <S.ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />
    </S.HeroSection>
  );
};
