import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTabs = function (theme: Theme): Pick<ComponentOptions, 'MuiTabs'> {
  return {
    MuiTabs: {
      styleOverrides: {},
    },
  };
};

export default muiTabs;
