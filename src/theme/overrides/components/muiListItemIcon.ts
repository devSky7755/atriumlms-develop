import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListItemIcon = function (theme: Theme): Pick<ComponentOptions, 'MuiListItemIcon'> {
  return {
    MuiListItemIcon: {
      styleOverrides: {},
    },
  };
};

export default muiListItemIcon;
