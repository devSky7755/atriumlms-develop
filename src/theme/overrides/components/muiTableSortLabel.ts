import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableSortLabel = function (theme: Theme): Pick<ComponentOptions, 'MuiTableSortLabel'> {
  return {
    MuiTableSortLabel: {
      styleOverrides: {},
    },
  };
};

export default muiTableSortLabel;
