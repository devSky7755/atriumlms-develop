import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTooltip = function (theme: Theme): Pick<ComponentOptions, 'MuiTooltip'> {
  return {
    MuiTooltip: {
      styleOverrides: {},
    },
  };
};

export default muiTooltip;
