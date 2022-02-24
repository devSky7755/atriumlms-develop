import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepIcon = function (theme: Theme): Pick<ComponentOptions, 'MuiStepIcon'> {
  return {
    MuiStepIcon: {
      styleOverrides: {},
    },
  };
};

export default muiStepIcon;
