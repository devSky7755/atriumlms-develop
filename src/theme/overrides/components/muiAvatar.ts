import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAvatar = function (theme: Theme): Pick<ComponentOptions, 'MuiAvatar'> {
  return {
    MuiAvatar: {
      styleOverrides: {},
    },
  };
};

export default muiAvatar;
