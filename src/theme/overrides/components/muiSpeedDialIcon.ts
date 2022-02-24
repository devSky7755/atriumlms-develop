import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSpeedDialIcon = function (theme: Theme): Pick<ComponentOptions, 'MuiSpeedDialIcon'> {
  return {
    MuiSpeedDialIcon: {
      styleOverrides: {},
    },
  };
};

export default muiSpeedDialIcon;
