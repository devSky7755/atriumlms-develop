import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiChip = function (theme: Theme): Pick<ComponentOptions, 'MuiChip'> {
  return {
    MuiChip: {
      styleOverrides: {},
    },
  };
};

export default muiChip;
