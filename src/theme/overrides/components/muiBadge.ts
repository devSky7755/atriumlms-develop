import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiBadge = function (theme: Theme): Pick<ComponentOptions, 'MuiBadge'> {
  return {
    MuiBadge: {
      styleOverrides: {},
    },
  };
};

export default muiBadge;
