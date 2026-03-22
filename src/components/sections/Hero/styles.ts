import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroGrid = styled.div<{ $hasImage?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $hasImage }) => ($hasImage ? '1fr 1fr' : '1fr')};
  gap: ${({ theme }) => theme.spacing[12]};
  align-items: center;
  min-height: calc(100vh - 160px);
  ${({ $hasImage }) => !$hasImage && 'justify-items: center; text-align: center;'}

  ${({ theme }) => theme.media.down.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
    text-align: center;
  }
`;

export const TextContent = styled.div<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  ${({ $centered }) => $centered && 'align-items: center;'}

  ${({ theme }) => theme.media.down.lg} {
    order: 2;
    align-items: center;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.down.lg} {
    order: 1;
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borders.radius.xl};
  position: relative;
  z-index: 2;
`;

export const ImageGlow = styled.div`
  position: absolute;
  inset: -20px;
  background: ${({ theme }) => theme.colors.gradients.primary};
  border-radius: ${({ theme }) => theme.borders.radius.xl};
  filter: blur(40px);
  opacity: 0.3;
  z-index: 1;
`;

export const Greeting = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.1;
  margin: 0;

  ${({ theme }) => theme.media.down.lg} {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  ${({ theme }) => theme.media.down.md} {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

export const RoleWrapper = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  min-height: 40px;

  ${({ theme }) => theme.media.down.md} {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const Role = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
  animation: ${blink} 1s infinite;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  ${({ theme }) => theme.media.down.lg} {
    justify-content: center;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-10px) translateX(-50%); }
  60% { transform: translateY(-5px) translateX(-50%); }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.text.muted};
  border-radius: ${({ theme }) => theme.borders.radius.full};

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transform: translateX(-50%);
    animation: ${bounce} 2s infinite;
  }
`;
