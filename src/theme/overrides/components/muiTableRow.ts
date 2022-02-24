import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableRow = function (theme: Theme): Pick<ComponentOptions, 'MuiTableRow'> {
  return {
    MuiTableRow: {
      styleOverrides: {},
    },
  };
};

export default muiTableRow;
