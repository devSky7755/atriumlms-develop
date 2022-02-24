import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiImageListItem = function (theme: Theme): Pick<ComponentOptions, 'MuiImageListItem'> {
  return {
    MuiImageListItem: {
      styleOverrides: {},
    },
  };
};

export default muiImageListItem;
