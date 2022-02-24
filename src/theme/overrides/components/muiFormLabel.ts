import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFormLabel = function (theme: Theme): Pick<ComponentOptions, 'MuiFormLabel'> {
  return {
    MuiFormLabel: {
      styleOverrides: {},
    },
  };
};

export default muiFormLabel;
