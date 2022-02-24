import { ThemeOptions } from '@mui/material';

export type BreakpointsOptions = ThemeOptions['breakpoints'];

export function breakpoints(): BreakpointsOptions {
  return {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  };
}
