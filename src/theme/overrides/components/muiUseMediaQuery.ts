import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiUseMediaQuery = function (theme: Theme): Pick<ComponentOptions, 'MuiUseMediaQuery'> {
  return {
    MuiUseMediaQuery: {
      defaultProps: {},
    },
  };
};

export default muiUseMediaQuery;
