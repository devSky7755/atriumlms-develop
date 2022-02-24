import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSpeedDial = function (theme: Theme): Pick<ComponentOptions, 'MuiSpeedDial'> {
  return {
    MuiSpeedDial: {
      styleOverrides: {},
    },
  };
};

export default muiSpeedDial;
