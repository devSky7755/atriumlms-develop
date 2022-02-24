import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiLinearProgress = function (theme: Theme): Pick<ComponentOptions, 'MuiLinearProgress'> {
  return {
    MuiLinearProgress: {
      styleOverrides: {},
    },
  };
};

export default muiLinearProgress;
