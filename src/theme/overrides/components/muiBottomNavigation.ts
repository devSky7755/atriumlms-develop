import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiBottomNavigation = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiBottomNavigation'> {
  return {
    MuiBottomNavigation: {
      styleOverrides: {},
    },
  };
};

export default muiBottomNavigation;
