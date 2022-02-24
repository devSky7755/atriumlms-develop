import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAvatarGroup = function (theme: Theme): Pick<ComponentOptions, 'MuiAvatarGroup'> {
  return {
    MuiAvatarGroup: {
      styleOverrides: {},
    },
  };
};

export default muiAvatarGroup;
