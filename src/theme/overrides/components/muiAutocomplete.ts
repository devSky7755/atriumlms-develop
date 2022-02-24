import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAutocomplete = function (theme: Theme): Pick<ComponentOptions, 'MuiAutocomplete'> {
  return {
    MuiAutocomplete: {
      styleOverrides: {},
    },
  };
};

export default muiAutocomplete;
