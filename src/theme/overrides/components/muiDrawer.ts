// noinspection ES6UnusedImports
import type {} from '@mui/lab/themeAugmentation';
import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiDrawer = function (theme: Theme): Pick<ComponentOptions, 'MuiDrawer'> {
  return {
    MuiDrawer: {
      styleOverrides: {},
    },
  };
};

export default muiDrawer;
