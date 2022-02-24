import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFormControl = function (theme: Theme): Pick<ComponentOptions, 'MuiFormControl'> {
  return {
    MuiFormControl: {
      styleOverrides: {},
    },
  };
};

export default muiFormControl;
