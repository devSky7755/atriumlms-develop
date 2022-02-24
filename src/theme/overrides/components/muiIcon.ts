import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiIcon = function (theme: Theme): Pick<ComponentOptions, 'MuiIcon'> {
  return {
    MuiIcon: {
      styleOverrides: {},
    },
  };
};

export default muiIcon;
