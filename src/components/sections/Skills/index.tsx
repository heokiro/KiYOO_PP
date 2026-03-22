import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../../content';
import type { SkillGroup, Skill } from '../../../types/content.types';
import { Container, Heading2 } from '../../common';
import { useScrollReveal } from '../../../hooks';
import * as S from './styles';

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <S.SkillsSection id="skills" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.Header>
            <Heading2 gradient align="center">
              {skillsData.title}
            </Heading2>
            {skillsData.subtitle && <S.Subtitle>{skillsData.subtitle}</S.Subtitle>}
          </S.Header>
        </motion.div>

        <S.SkillGroups>
          {skillsData.groups.map((group: SkillGroup, groupIndex: number) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <S.SkillGroup>
                <S.GroupTitle>{group.title}</S.GroupTitle>
                <S.SkillList>
                  {group.skills.map((skill: Skill, skillIndex: number) => (
                    <S.SkillItem key={skill.name}>
                      <S.SkillHeader>
                        <S.SkillName>{skill.name}</S.SkillName>
                        {skillsData.display.showPercentage && skill.level && (
                          <S.SkillLevel>{skill.level}%</S.SkillLevel>
                        )}
                      </S.SkillHeader>
                      {skillsData.display.showLevel && skill.level && (
                        <S.SkillBar>
                          <S.SkillProgress
                            as={motion.div}
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: groupIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            $level={skill.level}
                          />
                        </S.SkillBar>
                      )}
                    </S.SkillItem>
                  ))}
                </S.SkillList>
              </S.SkillGroup>
            </motion.div>
          ))}
        </S.SkillGroups>
      </Container>
    </S.SkillsSection>
  );
};
