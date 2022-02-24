import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCardHeader = function (theme: Theme): Pick<ComponentOptions, 'MuiCardHeader'> {
  return {
    MuiCardHeader: {
      styleOverrides: {},
    },
  };
};

export default muiCardHeader;
