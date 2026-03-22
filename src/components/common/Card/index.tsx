import styled, { css } from 'styled-components';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddings = {
  none: '0',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
};

export const Card = styled.div<CardProps>`
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ variant = 'default', theme }) => {
    switch (variant) {
      case 'elevated':
        return css`
          background: ${theme.colors.surfaceElevated};
          box-shadow: ${theme.shadows.md};
        `;
      case 'outlined':
        return css`
          background: transparent;
          border: 1px solid ${theme.colors.text.muted};
        `;
      default:
        return css`
          background: ${theme.colors.surface};
        `;
    }
  }}

  padding: ${({ padding = 'md' }) => paddings[padding]};

  ${({ hoverable, theme }) =>
    hoverable &&
    css`
      cursor: pointer;

      &:hover {
        transform: translateY(-8px);
        box-shadow: ${theme.shadows.xl};
      }
    `}
`;

export const CardImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;
