import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepper = function (theme: Theme): Pick<ComponentOptions, 'MuiStepper'> {
  return {
    MuiStepper: {
      styleOverrides: {},
    },
  };
};

export default muiStepper;
