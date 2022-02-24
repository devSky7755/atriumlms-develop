import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListItem = function (theme: Theme): Pick<ComponentOptions, 'MuiListItem'> {
  return {
    MuiListItem: {
      styleOverrides: {},
    },
  };
};

export default muiListItem;
