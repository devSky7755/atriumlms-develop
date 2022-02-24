import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiBreadcrumbs = function (theme: Theme): Pick<ComponentOptions, 'MuiBreadcrumbs'> {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {},
    },
  };
};

export default muiBreadcrumbs;
