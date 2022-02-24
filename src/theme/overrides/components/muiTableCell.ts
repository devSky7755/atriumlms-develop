import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableCell = function (theme: Theme): Pick<ComponentOptions, 'MuiTableCell'> {
  return {
    MuiTableCell: {
      styleOverrides: {},
    },
  };
};

export default muiTableCell;
