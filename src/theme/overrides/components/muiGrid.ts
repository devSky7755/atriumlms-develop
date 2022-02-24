import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiGrid = function (theme: Theme): Pick<ComponentOptions, 'MuiGrid'> {
  return {
    MuiGrid: {
      styleOverrides: {},
    },
  };
};

export default muiGrid;
