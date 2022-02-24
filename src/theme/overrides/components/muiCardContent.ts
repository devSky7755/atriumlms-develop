import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCardContent = function (theme: Theme): Pick<ComponentOptions, 'MuiCardContent'> {
  return {
    MuiCardContent: {
      styleOverrides: {},
    },
  };
};

export default muiCardContent;
