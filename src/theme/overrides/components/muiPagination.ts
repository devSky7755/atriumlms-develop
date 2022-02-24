import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiPagination = function (theme: Theme): Pick<ComponentOptions, 'MuiPagination'> {
  return {
    MuiPagination: {
      styleOverrides: {},
    },
  };
};

export default muiPagination;
