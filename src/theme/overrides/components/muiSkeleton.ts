import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSkeleton = function (theme: Theme): Pick<ComponentOptions, 'MuiSkeleton'> {
  return {
    MuiSkeleton: {
      styleOverrides: {},
    },
  };
};

export default muiSkeleton;
