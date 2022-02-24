import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiToggleButton = function (theme: Theme): Pick<ComponentOptions, 'MuiToggleButton'> {
  return {
    MuiToggleButton: {
      styleOverrides: {},
    },
  };
};

export default muiToggleButton;
