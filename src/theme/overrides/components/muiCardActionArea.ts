import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCardActionArea = function (theme: Theme): Pick<ComponentOptions, 'MuiCardActionArea'> {
  return {
    MuiCardActionArea: {
      styleOverrides: {},
    },
  };
};

export default muiCardActionArea;
