import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFormGroup = function (theme: Theme): Pick<ComponentOptions, 'MuiFormGroup'> {
  return {
    MuiFormGroup: {
      styleOverrides: {},
    },
  };
};

export default muiFormGroup;
