import styled, { css } from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
}

const gradientText = css`
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Typography = styled.span<TypographyProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  text-align: ${({ align = 'left' }) => align};

  ${({ variant = 'body', theme }) => {
    switch (variant) {
      case 'h1':
        return css`
          display: block;
          font-size: ${theme.typography.fontSize['6xl']};
          font-weight: ${theme.typography.fontWeight.bold};
          line-height: ${theme.typography.lineHeight.tight};

          ${theme.media.down.lg} {
            font-size: ${theme.typography.fontSize['5xl']};
          }
          ${theme.media.down.md} {
            font-size: ${theme.typography.fontSize['4xl']};
          }
        `;
      case 'h2':
        return css`
          display: block;
          font-size: ${theme.typography.fontSize['4xl']};
          font-weight: ${theme.typography.fontWeight.bold};
          line-height: ${theme.typography.lineHeight.snug};

          ${theme.media.down.md} {
            font-size: ${theme.typography.fontSize['3xl']};
          }
        `;
      case 'h3':
        return css`
          display: block;
          font-size: ${theme.typography.fontSize['2xl']};
          font-weight: ${theme.typography.fontWeight.medium};
        `;
      case 'h4':
        return css`
          display: block;
          font-size: ${theme.typography.fontSize.xl};
          font-weight: ${theme.typography.fontWeight.medium};
        `;
      case 'body':
        return css`
          font-size: ${theme.typography.fontSize.base};
          line-height: ${theme.typography.lineHeight.relaxed};
        `;
      case 'caption':
        return css`
          font-size: ${theme.typography.fontSize.sm};
          color: ${theme.colors.text.muted};
        `;
      default:
        return '';
    }
  }}

  color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.colors.text.primary;
      case 'secondary':
        return theme.colors.text.secondary;
      case 'muted':
        return theme.colors.text.muted;
      case 'accent':
        return theme.colors.primary;
      default:
        return 'inherit';
    }
  }};

  ${({ gradient }) => gradient && gradientText}
`;

export const Heading1 = styled(Typography).attrs({ as: 'h1', variant: 'h1' })``;
export const Heading2 = styled(Typography).attrs({ as: 'h2', variant: 'h2' })``;
export const Heading3 = styled(Typography).attrs({ as: 'h3', variant: 'h3' })``;
export const Heading4 = styled(Typography).attrs({ as: 'h4', variant: 'h4' })``;
export const Paragraph = styled(Typography).attrs({ as: 'p', variant: 'body' })``;
export const Caption = styled(Typography).attrs({ as: 'span', variant: 'caption' })``;
