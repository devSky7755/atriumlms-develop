import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiStack = function (theme: Theme): Pick<ComponentOptions, 'MuiStack'> {
  return {
    MuiStack: {
      defaultProps: {},
    },
  };
};

export default muiStack;
