import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiImageListItemBar = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiImageListItemBar'> {
  return {
    MuiImageListItemBar: {
      styleOverrides: {},
    },
  };
};

export default muiImageListItemBar;
