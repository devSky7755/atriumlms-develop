import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { ThemeProviderProps } from '@mui/styles';
import { reduce } from 'lodash';
import { ReactElement } from 'react';

import { createThemeOverrides, ThemeOverrides } from './ThemeOverrides';

type Props = Omit<ThemeProviderProps, 'theme'>;

type IThemeProvider = (props: Props) => ReactElement<Props>;

const ThemeProvider: IThemeProvider = function ({ children }: Props): ReactElement<Props> {
  const overrides: ThemeOverrides = createThemeOverrides();
  // TODO: add localization: https://mui.com/guides/localization/#locale-text
  const theme: Theme = ((initialTheme: Theme, postProcessors: ((t: Theme) => Theme)[]) =>
    reduce(postProcessors, (a, f) => f(a), initialTheme))(
    createTheme({
      breakpoints: overrides.breakpoints,
      mixins: overrides.mixins,
      palette: overrides.palette?.light,
      shadows: overrides.shadows,
      transitions: overrides.transitions,
      typography: overrides.typography,
    }),
    [
      (t: Theme) => {
        t.components = overrides.components(t);
        return t;
      },
      (t: Theme) => responsiveFontSizes(t),
    ],
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
