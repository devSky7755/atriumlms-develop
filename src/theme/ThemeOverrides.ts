import { Theme } from '@mui/material';

import {
  breakpoints,
  components,
  mixins,
  palette,
  shadows,
  transitions,
  typography,
} from './overrides';

export interface ThemeOverrides {
  breakpoints: ReturnType<typeof breakpoints>;
  mixins: ReturnType<typeof mixins>;
  palette: ReturnType<typeof palette>;
  shadows: ReturnType<typeof shadows>;
  transitions: ReturnType<typeof transitions>;
  typography: ReturnType<typeof typography>;

  components(theme: Theme): ReturnType<typeof components>;
}

export function createThemeOverrides(): ThemeOverrides {
  return {
    breakpoints: breakpoints(),
    mixins: mixins(),
    palette: palette(),
    shadows: shadows(),
    transitions: transitions(),
    typography: typography(),

    components(theme: Theme): ReturnType<typeof components> {
      return components(theme);
    },
  };
}
