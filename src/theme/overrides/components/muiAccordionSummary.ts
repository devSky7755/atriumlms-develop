import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

const muiAccordionSummary = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  theme: Theme,
  /* eslint-enable @typescript-eslint/no-unused-vars */
): Pick<ComponentOptions, 'MuiAccordionSummary'> {
  return {
    MuiAccordionSummary: {
      styleOverrides: {},
    },
  };
};

export default muiAccordionSummary;
