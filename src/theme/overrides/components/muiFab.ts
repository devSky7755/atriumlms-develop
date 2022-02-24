import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiFab = function (theme: Theme): Pick<ComponentOptions, 'MuiFab'> {
  return {
    MuiFab: {
      styleOverrides: {},
    },
  };
};

export default muiFab;
