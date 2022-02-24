import { ThemeOptions } from '@mui/material';

type NonUndefined<T> = T extends undefined ? never : T;

export type ComponentOptions = NonUndefined<ThemeOptions['components']>;
