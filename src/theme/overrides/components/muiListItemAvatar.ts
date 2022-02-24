import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiListItemAvatar = function (theme: Theme): Pick<ComponentOptions, 'MuiListItemAvatar'> {
  return {
    MuiListItemAvatar: {
      styleOverrides: {},
    },
  };
};

export default muiListItemAvatar;
