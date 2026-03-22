import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.text.inverse};
      box-shadow: ${({ theme }) => (theme.shadows.glow as Record<string, string>).primary};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.inverse};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.surface};
    }
  `,
};

const sizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  border: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  text-decoration: none;

  ${({ variant = 'primary' }) => variants[variant]}
  ${({ size = 'md' }) => sizes[size]}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
