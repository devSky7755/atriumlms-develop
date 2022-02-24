import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSelect = function (theme: Theme): Pick<ComponentOptions, 'MuiSelect'> {
  return {
    MuiSelect: {
      styleOverrides: {},
    },
  };
};

export default muiSelect;
