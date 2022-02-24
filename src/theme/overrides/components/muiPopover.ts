import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiPopover = function (theme: Theme): Pick<ComponentOptions, 'MuiPopover'> {
  return {
    MuiPopover: {
      styleOverrides: {},
    },
  };
};

export default muiPopover;
