import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSnackbar = function (theme: Theme): Pick<ComponentOptions, 'MuiSnackbar'> {
  return {
    MuiSnackbar: {
      styleOverrides: {},
    },
  };
};

export default muiSnackbar;
