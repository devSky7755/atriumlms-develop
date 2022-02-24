import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiButtonGroup = function (theme: Theme): Pick<ComponentOptions, 'MuiButtonGroup'> {
  return {
    MuiButtonGroup: {
      styleOverrides: {},
    },
  };
};

export default muiButtonGroup;
