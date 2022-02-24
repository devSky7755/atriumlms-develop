import { NextPage as DefaultNextPage } from 'next';
import { AppProps as NextAppProperties } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPage = DefaultNextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps<P> = Omit<NextAppProperties<P>, 'Component' | 'pageProps'> & {
  Component: NextPage;
  pageProps: P;
};

export type PageProps = Record<string, unknown> & {
  reactQuery?: {
    state: unknown;
  };
};
