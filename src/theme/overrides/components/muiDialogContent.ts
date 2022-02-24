import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDialogContent = function (theme: Theme): Pick<ComponentOptions, 'MuiDialogContent'> {
  return {
    MuiDialogContent: {
      styleOverrides: {},
    },
  };
};

export default muiDialogContent;
