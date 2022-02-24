import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiInputBase = function (theme: Theme): Pick<ComponentOptions, 'MuiInputBase'> {
  return {
    MuiInputBase: {
      styleOverrides: {},
    },
  };
};

export default muiInputBase;
