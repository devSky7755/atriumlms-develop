import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiInputAdornment = function (theme: Theme): Pick<ComponentOptions, 'MuiInputAdornment'> {
  return {
    MuiInputAdornment: {
      styleOverrides: {},
    },
  };
};

export default muiInputAdornment;
