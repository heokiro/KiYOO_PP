import styled, { css } from 'styled-components';

export const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

interface GridProps {
  $layout: 'grid' | 'masonry' | 'list';
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ $layout, theme }) => {
    switch ($layout) {
      case 'grid':
        return css`
          grid-template-columns: repeat(3, 1fr);

          ${theme.media.down.lg} {
            grid-template-columns: repeat(2, 1fr);
          }

          ${theme.media.down.md} {
            grid-template-columns: 1fr;
          }
        `;
      case 'list':
        return css`
          grid-template-columns: 1fr;
          max-width: 800px;
          margin: 0 auto;
        `;
      case 'masonry':
        return css`
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 10px;
        `;
      default:
        return '';
    }
  }}
`;

// Filter styles
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FilterLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

interface FilterButtonProps {
  $active: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borders.radius.full};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ $active, theme }) =>
    $active
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.text.inverse};
          border-color: ${theme.colors.primary};
        `
      : css`
          background: transparent;
          color: ${theme.colors.text.secondary};
          border-color: ${theme.colors.text.muted};

          &:hover {
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        `}
`;

// Card styles - Image only with hover overlay
export const CardWrapper = styled.article`
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;

  &:hover {
    transform: scale(1.02);
  }

  transition: transform ${({ theme }) => theme.transitions.normal};
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.1);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.normal};
  text-align: center;

  ${CardWrapper}:hover & {
    opacity: 1;
  }

  ${({ theme }) => theme.media.down.md} {
    display: none;
  }
`;

// Mobile-only bottom info bar
export const CardMobileInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[5]}`};
  padding-top: ${({ theme }) => theme.spacing[8]};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  ${({ theme }) => theme.media.down.md} {
    display: flex;
  }
`;

export const MobileCategory = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const MobileTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: #ffffff;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OverlayCategory = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const OverlayTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #ffffff;
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
`;

export const OverlayTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const OverlayTechBadge = styled.span`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-radius: ${({ theme }) => theme.borders.radius.full};
  backdrop-filter: blur(4px);
`;

export const ViewButton = styled.span`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;


// Keep old exports for compatibility
export const CardContent = styled.div``;
export const CardCategory = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;
export const CardTitle = styled.h3``;
export const CardDescription = styled.p``;
export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;
export const TechBadge = styled.span`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.media.down.md} {
    padding: ${({ theme }) => theme.spacing[2]};
  }
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borders.radius.xl};
  max-width: min(900px, calc(100vw - 1rem));
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
`;

export const ModalScroll = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.spacing[6]};
  padding-bottom: 0;

  ${({ theme }) => theme.media.down.md} {
    padding: ${({ theme }) => theme.spacing[3]};
    padding-bottom: 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }
`;

export const ModalImage = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borders.radius.xl}
    ${({ theme }) => theme.borders.radius.xl} 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing[6]} 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  margin: 0;

  ${({ theme }) => theme.media.down.md} {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  white-space: pre-line;
`;

export const ModalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

// Carousel styles
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.borders.radius.lg};
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CarouselVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
`;

interface CarouselArrowProps {
  $position: 'left' | 'right';
}

export const CarouselArrow = styled.button<CarouselArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: 12px;' : 'right: 12px;')}
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.full};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const CarouselCounter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 2;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-radius: ${({ theme }) => theme.borders.radius.full};
  backdrop-filter: blur(4px);
`;
