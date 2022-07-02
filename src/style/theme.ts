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
  palette: {
    primary: {
      main: '#e85a4f',
      light: '#e98074',
    },
    secondary: {
      main: '#d8c3a5',
    },
    text: {
      primary: '#8e8d8a',
      secondary: '#fff',
    },
    background: {
      default: '#eae7dc',
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});

export default theme;
