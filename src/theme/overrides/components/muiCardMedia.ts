import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCardMedia = function (theme: Theme): Pick<ComponentOptions, 'MuiCardMedia'> {
  return {
    MuiCardMedia: {
      styleOverrides: {},
    },
  };
};

export default muiCardMedia;
