import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDialogActions = function (theme: Theme): Pick<ComponentOptions, 'MuiDialogActions'> {
  return {
    MuiDialogActions: {
      styleOverrides: {},
    },
  };
};

export default muiDialogActions;
