import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListItemText = function (theme: Theme): Pick<ComponentOptions, 'MuiListItemText'> {
  return {
    MuiListItemText: {
      styleOverrides: {},
    },
  };
};

export default muiListItemText;
