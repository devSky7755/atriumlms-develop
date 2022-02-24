import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTableBody = function (theme: Theme): Pick<ComponentOptions, 'MuiTableBody'> {
  return {
    MuiTableBody: {
      styleOverrides: {},
    },
  };
};

export default muiTableBody;
