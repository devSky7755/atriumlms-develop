import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepButton = function (theme: Theme): Pick<ComponentOptions, 'MuiStepButton'> {
  return {
    MuiStepButton: {
      styleOverrides: {},
    },
  };
};

export default muiStepButton;
