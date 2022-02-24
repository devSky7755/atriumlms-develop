import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTable = function (theme: Theme): Pick<ComponentOptions, 'MuiTable'> {
  return {
    MuiTable: {
      styleOverrides: {},
    },
  };
};

export default muiTable;
