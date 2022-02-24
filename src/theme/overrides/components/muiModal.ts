import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiModal = function (theme: Theme): Pick<ComponentOptions, 'MuiModal'> {
  return {
    MuiModal: {
      styleOverrides: {},
    },
  };
};

export default muiModal;
