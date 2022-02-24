// noinspection ES6UnusedImports
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BreakpointOverrides } from '@mui/material/styles';
/* eslint-enable @typescript-eslint/no-unused-vars */

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xs: false; // removes the `xs` breakpoint
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // tablet: true; // adds the `tablet` breakpoint
    // laptop: true;
    // desktop: true;
  }
}
