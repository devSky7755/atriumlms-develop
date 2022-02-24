import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiAccordionActions = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiAccordionActions'> {
  return {
    MuiAccordionActions: {
      styleOverrides: {},
    },
  };
};

export default muiAccordionActions;
