import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCard = function (theme: Theme): Pick<ComponentOptions, 'MuiCard'> {
  return {
    MuiCard: {
      styleOverrides: {},
    },
  };
};

export default muiCard;
