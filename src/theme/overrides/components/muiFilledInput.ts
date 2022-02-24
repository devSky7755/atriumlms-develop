import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFilledInput = function (theme: Theme): Pick<ComponentOptions, 'MuiFilledInput'> {
  return {
    MuiFilledInput: {
      styleOverrides: {},
    },
  };
};

export default muiFilledInput;
