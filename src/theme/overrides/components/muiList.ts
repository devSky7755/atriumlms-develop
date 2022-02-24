import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiList = function (theme: Theme): Pick<ComponentOptions, 'MuiList'> {
  return {
    MuiList: {
      styleOverrides: {},
    },
  };
};

export default muiList;
