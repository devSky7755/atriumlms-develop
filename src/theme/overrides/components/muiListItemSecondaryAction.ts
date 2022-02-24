import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiListItemSecondaryAction = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiListItemSecondaryAction'> {
  return {
    MuiListItemSecondaryAction: {
      styleOverrides: {},
    },
  };
};

export default muiListItemSecondaryAction;
