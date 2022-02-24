import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { AuthGuard } from '../guards';
import { useRedirectUrl, useUserinfo } from '../hooks';
import type { NextPage } from '../types/next';

const Home: NextPage = function () {
  const userinfo = useUserinfo();
  const { push } = useRouter();

  const redirectUrl = useRedirectUrl({
    enabled: userinfo.isFetched && (userinfo.isError || !userinfo.data?.isAdmin),
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (userinfo.isSuccess && userinfo.data.isAdmin) {
      // noinspection JSIgnoredPromiseFromCall
      push('/admin');
    }
    if (redirectUrl.isSuccess && redirectUrl.data) {
      window.location.href = redirectUrl.data.url;
    }
  }, [userinfo, push, redirectUrl]);

  const innerComponent = () => {
    if (redirectUrl.isError) {
      return <Typography>Unable to resolve redirect URI</Typography>;
    }
    // eslint-disable-next-line unicorn/no-null
    return null;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {innerComponent()}
    </Box>
  );
};

Home.getLayout = (page) => {
  return <AuthGuard>{page}</AuthGuard>;
};

export default Home;
