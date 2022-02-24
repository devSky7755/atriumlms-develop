import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSwitch = function (theme: Theme): Pick<ComponentOptions, 'MuiSwitch'> {
  return {
    MuiSwitch: {
      styleOverrides: {},
    },
  };
};

export default muiSwitch;
