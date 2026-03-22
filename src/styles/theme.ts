import type { ThemeType } from '../types/theme.types';

export const theme: ThemeType = {
  colors: {
    primary: '#5465ff',
    secondary: '#68ed00',
    accent: '#f40',
    highlight: '#f2c3f0',

    background: '#0a0a0a',
    surface: '#141414',
    surfaceElevated: '#1a1a1a',

    text: {
      primary: '#ffffff',
      secondary: '#b5b6e8',
      muted: '#888888',
      inverse: '#0a0a0a',
    },

    success: '#68ed00',
    warning: '#f40',
    error: '#ff4444',
    info: '#5465ff',

    gradients: {
      primary: 'linear-gradient(135deg, #5465ff 0%, #68ed00 100%)',
      secondary: 'linear-gradient(135deg, #f40 0%, #f2c3f0 100%)',
      dark: 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)',
    },
  },

  typography: {
    fontFamily: {
      primary: '"Space Grotesk", -apple-system, sans-serif',
      secondary: '"Inter", -apple-system, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },

    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  breakpoints: {
    mobile: '520px',
    tablet: '640px',
    laptop: '1100px',
    desktop: '1400px',
  },

  media: {
    mobile: '@media (max-width: 519px)',
    tablet: '@media (min-width: 520px) and (max-width: 639px)',
    laptop: '@media (min-width: 640px) and (max-width: 1099px)',
    desktop: '@media (min-width: 1100px)',

    up: {
      sm: '@media (min-width: 520px)',
      md: '@media (min-width: 640px)',
      lg: '@media (min-width: 1100px)',
      xl: '@media (min-width: 1400px)',
    },
    down: {
      sm: '@media (max-width: 519px)',
      md: '@media (max-width: 639px)',
      lg: '@media (max-width: 1099px)',
      xl: '@media (max-width: 1399px)',
    },
  },

  borders: {
    radius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '1.5rem',
      full: '9999px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.25)',
    glow: {
      primary: '0 0 20px rgba(84, 101, 255, 0.5)',
      secondary: '0 0 20px rgba(104, 237, 0, 0.5)',
      accent: '0 0 20px rgba(255, 68, 0, 0.5)',
    },
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  zIndex: {
    dropdown: 100,
    sticky: 200,
    modal: 300,
    overlay: 400,
    tooltip: 500,
  },

  container: {
    maxWidth: '1200px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '4rem',
    },
  },
};

export const lightTheme: ThemeType = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#ffffff',
    surface: '#f5f5f5',
    surfaceElevated: '#ffffff',
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
      muted: '#999999',
      inverse: '#ffffff',
    },
    gradients: {
      ...theme.colors.gradients,
      dark: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
    },
  },
  shadows: {
    ...theme.shadows,
    sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
    md: '0 4px 12px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 24px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.04)',
    glow: {
      primary: '0 0 20px rgba(84, 101, 255, 0.2)',
      secondary: '0 0 20px rgba(104, 237, 0, 0.2)',
      accent: '0 0 20px rgba(255, 68, 0, 0.2)',
    },
  },
};
