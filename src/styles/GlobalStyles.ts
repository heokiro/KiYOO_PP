import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;

    ${({ theme }) => theme.media.down.md} {
      font-size: 14px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSize['6xl']}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSize['4xl']}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSize['2xl']}; }
  h4 { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.muted};
    border-radius: ${({ theme }) => theme.borders.radius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  section {
    padding: ${({ theme }) => theme.spacing[20]} 0;

    ${({ theme }) => theme.media.down.md} {
      padding: ${({ theme }) => theme.spacing[12]} 0;
    }
  }
`;
