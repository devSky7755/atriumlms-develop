import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiMobileStepper = function (theme: Theme): Pick<ComponentOptions, 'MuiMobileStepper'> {
  return {
    MuiMobileStepper: {
      styleOverrides: {},
    },
  };
};

export default muiMobileStepper;
