import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiAccordion = function (theme: Theme): Pick<ComponentOptions, 'MuiAccordion'> {
  return {
    MuiAccordion: {
      styleOverrides: {},
    },
  };
};

export default muiAccordion;
