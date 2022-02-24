import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListItemButton = function (theme: Theme): Pick<ComponentOptions, 'MuiListItemButton'> {
  return {
    MuiListItemButton: {
      styleOverrides: {},
    },
  };
};

export default muiListItemButton;
