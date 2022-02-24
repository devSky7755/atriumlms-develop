import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTypography = function (theme: Theme): Pick<ComponentOptions, 'MuiTypography'> {
  return {
    MuiTypography: {
      styleOverrides: {},
    },
  };
};

export default muiTypography;
