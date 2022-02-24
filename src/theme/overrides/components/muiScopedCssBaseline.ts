import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiScopedCssBaseline = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiScopedCssBaseline'> {
  return {
    MuiScopedCssBaseline: {
      styleOverrides: {},
    },
  };
};

export default muiScopedCssBaseline;
