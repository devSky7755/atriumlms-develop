import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiPaginationItem = function (theme: Theme): Pick<ComponentOptions, 'MuiPaginationItem'> {
  return {
    MuiPaginationItem: {
      styleOverrides: {},
    },
  };
};

export default muiPaginationItem;
