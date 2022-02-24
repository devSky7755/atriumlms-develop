import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepLabel = function (theme: Theme): Pick<ComponentOptions, 'MuiStepLabel'> {
  return {
    MuiStepLabel: {
      styleOverrides: {},
    },
  };
};

export default muiStepLabel;
