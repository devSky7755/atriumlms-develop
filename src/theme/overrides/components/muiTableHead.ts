import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableHead = function (theme: Theme): Pick<ComponentOptions, 'MuiTableHead'> {
  return {
    MuiTableHead: {
      styleOverrides: {},
    },
  };
};

export default muiTableHead;
