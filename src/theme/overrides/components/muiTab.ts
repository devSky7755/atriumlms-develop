import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTab = function (theme: Theme): Pick<ComponentOptions, 'MuiTab'> {
  return {
    MuiTab: {
      styleOverrides: {},
    },
  };
};

export default muiTab;
