import { useState, useEffect } from 'react';

const breakpoints = {
  mobile: 520,
  tablet: 640,
  laptop: 1100,
  desktop: 1400,
};

type BreakpointKey = keyof typeof breakpoints;

export const useMediaQuery = (breakpoint: BreakpointKey): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${breakpoints[breakpoint]}px)`;
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [breakpoint]);

  return matches;
};

export const useIsMobile = () => !useMediaQuery('mobile');
export const useIsTablet = () => useMediaQuery('mobile') && !useMediaQuery('tablet');
export const useIsDesktop = () => useMediaQuery('laptop');
