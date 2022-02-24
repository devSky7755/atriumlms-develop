import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiTextField = function (theme: Theme): Pick<ComponentOptions, 'MuiTextField'> {
  return {
    MuiTextField: {
      styleOverrides: {},
    },
  };
};

export default muiTextField;
