import styled from 'styled-components';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return '800px';
      case 'md':
        return '1000px';
      case 'lg':
        return theme.container.maxWidth;
      case 'full':
        return '100%';
      default:
        return theme.container.maxWidth;
    }
  }};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.desktop};

  ${({ theme }) => theme.media.down.lg} {
    padding: 0 ${({ theme }) => theme.container.padding.tablet};
  }

  ${({ theme }) => theme.media.down.md} {
    padding: 0 ${({ theme }) => theme.container.padding.mobile};
  }
`;
