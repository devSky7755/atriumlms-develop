import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCheckbox = function (theme: Theme): Pick<ComponentOptions, 'MuiCheckbox'> {
  return {
    MuiCheckbox: {
      styleOverrides: {},
    },
  };
};

export default muiCheckbox;
