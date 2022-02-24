import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFormHelperText = function (theme: Theme): Pick<ComponentOptions, 'MuiFormHelperText'> {
  return {
    MuiFormHelperText: {
      styleOverrides: {},
    },
  };
};

export default muiFormHelperText;
