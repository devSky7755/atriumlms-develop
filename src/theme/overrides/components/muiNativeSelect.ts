import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiNativeSelect = function (theme: Theme): Pick<ComponentOptions, 'MuiNativeSelect'> {
  return {
    MuiNativeSelect: {
      styleOverrides: {},
    },
  };
};

export default muiNativeSelect;
