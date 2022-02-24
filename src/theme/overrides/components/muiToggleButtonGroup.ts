import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiToggleButtonGroup = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiToggleButtonGroup'> {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {},
    },
  };
};

export default muiToggleButtonGroup;
