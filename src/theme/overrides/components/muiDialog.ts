import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDialog = function (theme: Theme): Pick<ComponentOptions, 'MuiDialog'> {
  return {
    MuiDialog: {
      styleOverrides: {},
    },
  };
};

export default muiDialog;
