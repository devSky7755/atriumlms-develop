import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiInput = function (theme: Theme): Pick<ComponentOptions, 'MuiInput'> {
  return {
    MuiInput: {
      styleOverrides: {},
    },
  };
};

export default muiInput;
