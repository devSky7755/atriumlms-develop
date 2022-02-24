import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiLink = function (theme: Theme): Pick<ComponentOptions, 'MuiLink'> {
  return {
    MuiLink: {
      styleOverrides: {},
    },
  };
};

export default muiLink;
