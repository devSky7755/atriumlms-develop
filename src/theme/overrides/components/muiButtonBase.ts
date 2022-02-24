import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiButtonBase = function (theme: Theme): Pick<ComponentOptions, 'MuiButtonBase'> {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {},
    },
  };
};

export default muiButtonBase;
