import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAlertTitle = function (theme: Theme): Pick<ComponentOptions, 'MuiAlertTitle'> {
  return {
    MuiAlertTitle: {
      styleOverrides: {},
    },
  };
};

export default muiAlertTitle;
