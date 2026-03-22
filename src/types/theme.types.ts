import 'styled-components';

export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  background: string;
  surface: string;
  surfaceElevated: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  success: string;
  warning: string;
  error: string;
  info: string;
  gradients: {
    primary: string;
    secondary: string;
    dark: string;
  };
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: Record<string, string>;
  fontWeight: Record<string, number>;
  lineHeight: Record<string, number>;
}

export interface ThemeType {
  colors: Colors;
  typography: Typography;
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
  media: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    up: Record<string, string>;
    down: Record<string, string>;
  };
  borders: {
    radius: Record<string, string>;
    width: Record<string, string>;
  };
  shadows: Record<string, string | Record<string, string>>;
  transitions: Record<string, string>;
  zIndex: Record<string, number>;
  container: {
    maxWidth: string;
    padding: Record<string, string>;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
