import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiPaper = function (theme: Theme): Pick<ComponentOptions, 'MuiPaper'> {
  return {
    MuiPaper: {
      styleOverrides: {},
    },
  };
};

export default muiPaper;
