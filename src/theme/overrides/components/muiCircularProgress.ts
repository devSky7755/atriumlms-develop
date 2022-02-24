import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiCircularProgress = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiCircularProgress'> {
  return {
    MuiCircularProgress: {
      styleOverrides: {},
    },
  };
};

export default muiCircularProgress;
