import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAlert = function (theme: Theme): Pick<ComponentOptions, 'MuiAlert'> {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  };
};

export default muiAlert;
