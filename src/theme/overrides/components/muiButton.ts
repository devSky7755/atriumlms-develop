import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiButton = function (theme: Theme): Pick<ComponentOptions, 'MuiButton'> {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: '16px',
          padding: theme.spacing(2, 5),
        },
      },
    },
  };
};

export default muiButton;
