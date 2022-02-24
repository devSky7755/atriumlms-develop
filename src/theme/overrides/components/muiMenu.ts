import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiMenu = function (theme: Theme): Pick<ComponentOptions, 'MuiMenu'> {
  return {
    MuiMenu: {
      styleOverrides: {},
    },
  };
};

export default muiMenu;
