import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiRating = function (theme: Theme): Pick<ComponentOptions, 'MuiRating'> {
  return {
    MuiRating: {
      styleOverrides: {},
    },
  };
};

export default muiRating;
