import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiMenuItem = function (theme: Theme): Pick<ComponentOptions, 'MuiMenuItem'> {
  return {
    MuiMenuItem: {
      styleOverrides: {},
    },
  };
};

export default muiMenuItem;
