import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSpeedDialAction = function (theme: Theme): Pick<ComponentOptions, 'MuiSpeedDialAction'> {
  return {
    MuiSpeedDialAction: {
      styleOverrides: {},
    },
  };
};

export default muiSpeedDialAction;
