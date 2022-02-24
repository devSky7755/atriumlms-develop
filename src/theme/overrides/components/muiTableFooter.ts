import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableFooter = function (theme: Theme): Pick<ComponentOptions, 'MuiTableFooter'> {
  return {
    MuiTableFooter: {
      styleOverrides: {},
    },
  };
};

export default muiTableFooter;
