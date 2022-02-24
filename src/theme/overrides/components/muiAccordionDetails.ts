import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiAccordionDetails = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiAccordionDetails'> {
  return {
    MuiAccordionDetails: {
      styleOverrides: {},
    },
  };
};

export default muiAccordionDetails;
