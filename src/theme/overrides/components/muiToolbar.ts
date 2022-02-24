import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiToolbar = function (theme: Theme): Pick<ComponentOptions, 'MuiToolbar'> {
  return {
    MuiToolbar: {
      styleOverrides: {},
    },
  };
};

export default muiToolbar;
