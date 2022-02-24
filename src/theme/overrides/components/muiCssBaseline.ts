import { Theme } from '@mui/material';

import { ComponentOptions } from './options';

type ScrollBarOptions = {
  track: string;
  thumb: string;
  active: string;
};

export function scrollbar(options: ScrollBarOptions) {
  return {
    scrollbarColor: `${options.thumb} ${options.track}`,
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      backgroundColor: options.track,
    },
    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: options.thumb,
      minHeight: 24,
      border: `3px solid ${options.track}`,
    },
    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
      backgroundColor: options.track,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const muiCssBaseline = function (theme: Theme): Pick<ComponentOptions, 'MuiCssBaseline'> {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          WebkitOverflowScrolling: 'touch',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
        '#__next': {
          height: '100%',
          width: '100%',
        },
      },
    },
  };
};

export default muiCssBaseline;
