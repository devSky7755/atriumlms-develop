import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCardActions = function (theme: Theme): Pick<ComponentOptions, 'MuiCardActions'> {
  return {
    MuiCardActions: {
      styleOverrides: {},
    },
  };
};

export default muiCardActions;
