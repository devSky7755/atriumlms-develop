import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableContainer = function (theme: Theme): Pick<ComponentOptions, 'MuiTableContainer'> {
  return {
    MuiTableContainer: {
      styleOverrides: {},
    },
  };
};

export default muiTableContainer;
