import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDivider = function (theme: Theme): Pick<ComponentOptions, 'MuiDivider'> {
  return {
    MuiDivider: {
      styleOverrides: {},
    },
  };
};

export default muiDivider;
