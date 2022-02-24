import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCollapse = function (theme: Theme): Pick<ComponentOptions, 'MuiCollapse'> {
  return {
    MuiCollapse: {
      styleOverrides: {},
    },
  };
};

export default muiCollapse;
