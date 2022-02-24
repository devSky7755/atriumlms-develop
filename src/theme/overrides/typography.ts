import { ThemeOptions } from '@mui/material';

export type TypographyOptions = ThemeOptions['typography'];

export function typography(): TypographyOptions {
  return {
    fontFamily: `'Ubuntu', sans-serif`,
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h3: {
      fontSize: '2.5rem',
    },
  };
}
