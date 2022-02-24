import { Box, BoxProps } from '@mui/material';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

type Props = BoxProps & {
  children?: ReactNode | undefined;
  title: string;
};

const Page = forwardRef<typeof Box, Props>(function Page(
  // eslint-disable-next-line react/prop-types
  { children, title, sx }: PropsWithChildren<Props>,
  ref: ForwardedRef<typeof Box>,
) {
  // noinspection HtmlRequiredTitleElement
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo title={title} />
      <Box sx={{ width: '100%', height: '100%', ...sx }} ref={ref}>
        {children}
      </Box>
    </>
  );
});

export default Page;
