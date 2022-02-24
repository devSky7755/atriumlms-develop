import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStepContent = function (theme: Theme): Pick<ComponentOptions, 'MuiStepContent'> {
  return {
    MuiStepContent: {
      styleOverrides: {},
    },
  };
};

export default muiStepContent;
