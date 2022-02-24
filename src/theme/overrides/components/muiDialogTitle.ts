import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDialogTitle = function (theme: Theme): Pick<ComponentOptions, 'MuiDialogTitle'> {
  return {
    MuiDialogTitle: {
      styleOverrides: {},
    },
  };
};

export default muiDialogTitle;
