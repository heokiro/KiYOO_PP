import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.text.muted}20;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.borders.radius.full};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
`;
