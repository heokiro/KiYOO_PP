import styled, { css } from 'styled-components';

interface HeaderWrapperProps {
  $isScrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ $isScrolled, theme }) =>
    $isScrolled
      ? css`
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: ${theme.shadows.md};
        `
      : css`
          background: transparent;
        `}
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  ${({ theme }) => theme.media.down.md} {
    height: 64px;
  }
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.media.down.lg} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.media.down.lg} {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;

  ${({ theme }) => theme.media.down.lg} {
    display: block;
  }
`;

export const MobileNavLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.surfaceElevated};
  }
`;
