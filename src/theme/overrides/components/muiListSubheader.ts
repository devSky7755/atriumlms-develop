import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListSubheader = function (theme: Theme): Pick<ComponentOptions, 'MuiListSubheader'> {
  return {
    MuiListSubheader: {
      styleOverrides: {},
    },
  };
};

export default muiListSubheader;
