import '../styles/globals.scss';

// import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import { DefaultSeo } from 'next-seo';
import { SnackbarProvider } from 'notistack';
import React, { useMemo } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import SEO from '../../next-seo.config';
import AuthProvider from '../auth/AuthContext';
import { ThemeProvider } from '../theme';
import { AppProps, PageProps } from '../types/next';

// ClassNameGenerator.configure((componentName) => componentName.replace('Mui', 'Mobi'));

const App = function ({
  Component,
  pageProps: { store, reactQuery, ...pageProps },
}: AppProps<PageProps>) {
  const queryClient = useMemo(() => new QueryClient(), []);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...SEO} />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={reactQuery?.state}>
            <ThemeProvider>
              <SnackbarProvider maxSnack={3}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {getLayout(<Component {...pageProps} />)}
              </SnackbarProvider>
            </ThemeProvider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default App;
