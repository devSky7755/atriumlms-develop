import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAppBar = function (theme: Theme): Pick<ComponentOptions, 'MuiAppBar'> {
  return {
    MuiAppBar: {
      styleOverrides: {},
    },
  };
};

export default muiAppBar;
