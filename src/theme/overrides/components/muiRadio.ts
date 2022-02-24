import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiRadio = function (theme: Theme): Pick<ComponentOptions, 'MuiRadio'> {
  return {
    MuiRadio: {
      styleOverrides: {},
    },
  };
};

export default muiRadio;
