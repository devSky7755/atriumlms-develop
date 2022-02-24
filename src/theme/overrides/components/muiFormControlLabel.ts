import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiFormControlLabel = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiFormControlLabel'> {
  return {
    MuiFormControlLabel: {
      styleOverrides: {},
    },
  };
};

export default muiFormControlLabel;
