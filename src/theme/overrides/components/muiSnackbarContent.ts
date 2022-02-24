import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSnackbarContent = function (theme: Theme): Pick<ComponentOptions, 'MuiSnackbarContent'> {
  return {
    MuiSnackbarContent: {
      styleOverrides: {},
    },
  };
};

export default muiSnackbarContent;
