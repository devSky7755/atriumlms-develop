import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiImageList = function (theme: Theme): Pick<ComponentOptions, 'MuiImageList'> {
  return {
    MuiImageList: {
      styleOverrides: {},
    },
  };
};

export default muiImageList;
