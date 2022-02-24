import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiDialogContentText = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiDialogContentText'> {
  return {
    MuiDialogContentText: {
      styleOverrides: {},
    },
  };
};

export default muiDialogContentText;
