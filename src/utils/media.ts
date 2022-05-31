import { BREAKPOINTS, BreakPointTypes } from 'src/constants/breakpoints';

type Media = Exclude<keyof BreakPointTypes, 'mobile'>;

export const media = (size: Media) =>
  `@media(min-width: ${BREAKPOINTS[size]}px)`;
