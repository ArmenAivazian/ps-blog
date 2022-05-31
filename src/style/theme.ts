import { createTheme } from '@mui/material/styles';

import { BREAKPOINTS } from 'src/constants/breakpoints';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});

export default theme;
