import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepConnector = function (theme: Theme): Pick<ComponentOptions, 'MuiStepConnector'> {
  return {
    MuiStepConnector: {
      styleOverrides: {},
    },
  };
};

export default muiStepConnector;
