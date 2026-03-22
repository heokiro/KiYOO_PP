import styled from 'styled-components';

export const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing[16]};
  align-items: center;

  ${({ theme }) => theme.media.down.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  overflow: hidden;

  ${({ theme }) => theme.media.down.lg} {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.gradients.primary};
  opacity: 0.1;
  pointer-events: none;
`;

export const TextContent = styled.div``;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

export const Highlights = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  flex-wrap: wrap;

  ${({ theme }) => theme.media.down.md} {
    justify-content: center;
  }
`;

export const HighlightItem = styled.div`
  text-align: center;
`;

export const HighlightValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const HighlightLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;
