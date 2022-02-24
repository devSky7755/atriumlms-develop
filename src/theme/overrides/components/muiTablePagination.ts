import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTablePagination = function (theme: Theme): Pick<ComponentOptions, 'MuiTablePagination'> {
  return {
    MuiTablePagination: {
      styleOverrides: {},
    },
  };
};

export default muiTablePagination;
