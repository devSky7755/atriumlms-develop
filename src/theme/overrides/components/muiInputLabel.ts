import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiInputLabel = function (theme: Theme): Pick<ComponentOptions, 'MuiInputLabel'> {
  return {
    MuiInputLabel: {
      styleOverrides: {},
    },
  };
};

export default muiInputLabel;
