import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTouchRipple = function (theme: Theme): Pick<ComponentOptions, 'MuiTouchRipple'> {
  return {
    MuiTouchRipple: {
      styleOverrides: {},
    },
  };
};

export default muiTouchRipple;
