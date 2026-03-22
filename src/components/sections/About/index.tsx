import React from 'react';
import { motion } from 'framer-motion';
import {
  SiUnity, SiUnrealengine, SiArduino, SiRaspberrypi,
  SiBlender, SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiFigma, SiDocker,
} from 'react-icons/si';
import {
  FiCpu, FiTarget, FiShare2, FiZap, FiBox,
  FiFilm, FiPenTool, FiLayout, FiCloud,
} from 'react-icons/fi';
import { about } from '../../../content';
import type { CapabilityTool } from '../../../types/content.types';
import { Container } from '../../common';
import { useScrollReveal } from '../../../hooks';
import * as S from './styles';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  SiUnity,
  SiUnrealengine,
  SiArduino,
  SiRaspberrypi,
  SiBlender,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiDocker,
  SiAdobeaftereffects: FiFilm,
  SiAdobepremierepro: FiFilm,
  SiAdobeillustrator: FiPenTool,
  SiAdobexd: FiLayout,
  SiAmazonwebservices: FiCloud,
  FiCpu,
  FiTarget,
  FiShare2,
  FiZap,
};

const ToolIconComponent: React.FC<{ tool: CapabilityTool }> = ({ tool }) => {
  const IconComp = iconMap[tool.icon];
  return (
    <S.ToolIcon title={tool.name}>
      {IconComp ? <IconComp size={20} /> : <FiBox size={20} />}
    </S.ToolIcon>
  );
};

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <S.CapabilitiesSection id="capabilities" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.Heading>{about.heading}</S.Heading>
        </motion.div>

        <S.Grid>
          {about.items.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <S.Card>
                <S.ToolRow>
                  {cap.tools.map((tool, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && <S.ToolSeparator>×</S.ToolSeparator>}
                      <ToolIconComponent tool={tool} />
                    </React.Fragment>
                  ))}
                </S.ToolRow>
                <S.CardTitle>{cap.title}</S.CardTitle>
                <S.CardDescEn>{cap.descriptionEn}</S.CardDescEn>
                <S.CardDescKo>{cap.descriptionKo}</S.CardDescKo>
              </S.Card>
            </motion.div>
          ))}
        </S.Grid>
      </Container>
    </S.CapabilitiesSection>
  );
};
