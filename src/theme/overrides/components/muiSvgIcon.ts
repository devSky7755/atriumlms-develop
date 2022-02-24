import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSvgIcon = function (theme: Theme): Pick<ComponentOptions, 'MuiSvgIcon'> {
  return {
    MuiSvgIcon: {
      styleOverrides: {},
    },
  };
};

export default muiSvgIcon;
