import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiIconButton = function (theme: Theme): Pick<ComponentOptions, 'MuiIconButton'> {
  return {
    MuiIconButton: {
      styleOverrides: {},
    },
  };
};

export default muiIconButton;
