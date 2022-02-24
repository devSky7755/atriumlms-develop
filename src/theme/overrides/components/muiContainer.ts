import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiContainer = function (theme: Theme): Pick<ComponentOptions, 'MuiContainer'> {
  return {
    MuiContainer: {
      styleOverrides: {},
    },
  };
};

export default muiContainer;
