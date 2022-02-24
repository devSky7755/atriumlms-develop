import { AppBar, Box, ButtonProps, styled, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, forwardRef, FunctionComponent, useEffect } from 'react';

import { Button } from '../components';
import { AdminUserInfo, useUserinfo } from '../hooks';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}));

export const LogoutButton: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  function LogoutButton(
    // eslint-disable-next-line react/prop-types
    { children },
    ref,
  ) {
    return (
      <Link href="/logout" passHref>
        <Button ref={ref} color="inherit">
          {children}
        </Button>
      </Link>
    );
  },
);

const Layout: FunctionComponent = function ({ children }) {
  const { push } = useRouter();
  const { data: userinfo, isError, error } = useUserinfo();

  useEffect(() => {
    if (error || isError) {
      // noinspection JSIgnoredPromiseFromCall
      push('/redirect');
    }
  }, [error, isError, push]);

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 100 }} />
          {(userinfo as AdminUserInfo)?.user?.email && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {(userinfo as AdminUserInfo)?.user?.email}
            </Typography>
          )}
          <LogoutButton>Logout</LogoutButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Root>
  );
};

export default Layout;
