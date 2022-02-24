import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiSlider = function (theme: Theme): Pick<ComponentOptions, 'MuiSlider'> {
  return {
    MuiSlider: {
      styleOverrides: {},
    },
  };
};

export default muiSlider;
