import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';

export type PaletteOptions = ThemeOptions['palette'];

export type Palette = {
  light: PaletteOptions;
  dark: PaletteOptions;
};

export function palette(): Palette | undefined {
  return {
    light: {
      mode: 'light',
      primary: {
        main: 'rgb(255, 132, 36)',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#000000',
        contrastText: '#000000',
      },
      error: {
        main: red.A400,
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    dark: undefined,
  };
}
