import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiBottomNavigationAction = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiBottomNavigationAction'> {
  return {
    MuiBottomNavigationAction: {
      styleOverrides: {},
    },
  };
};

export default muiBottomNavigationAction;
