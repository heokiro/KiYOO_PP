import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { profile } from '../../../content';
import { Container } from '../../common';
import * as S from './styles';

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  twitter: <FiTwitter size={20} />,
  email: <FiMail size={20} />,
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = Object.entries(profile.social).filter(
    ([key, value]) => value && socialIcons[key]
  );

  return (
    <S.FooterWrapper>
      <Container>
        <S.FooterContent>
          <S.Logo>
            {profile.name.split(' ')[0]}
            <span>.</span>
          </S.Logo>

          <S.SocialLinks>
            {socialLinks.map(([key, value]) => (
              <S.SocialLink
                key={key}
                href={key === 'email' ? `mailto:${value}` : (value as string)}
                target={key === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={key}
              >
                {socialIcons[key]}
              </S.SocialLink>
            ))}
          </S.SocialLinks>

          <S.Copyright>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </S.Copyright>
        </S.FooterContent>
      </Container>
    </S.FooterWrapper>
  );
};
