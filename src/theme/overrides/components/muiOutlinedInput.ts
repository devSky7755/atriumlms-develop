import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiOutlinedInput = function (theme: Theme): Pick<ComponentOptions, 'MuiOutlinedInput'> {
  return {
    MuiOutlinedInput: {
      styleOverrides: {},
    },
  };
};

export default muiOutlinedInput;
