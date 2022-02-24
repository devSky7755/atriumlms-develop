import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiBackdrop = function (theme: Theme): Pick<ComponentOptions, 'MuiBackdrop'> {
  return {
    MuiBackdrop: {
      styleOverrides: {},
    },
  };
};

export default muiBackdrop;
