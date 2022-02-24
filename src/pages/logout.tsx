import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';

import { useAuth } from '../hooks';
import type { NextPage } from '../types/next';

const Logout: NextPage = function () {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    logout()
      .then(() => queryClient.getQueryCache().clear())
      .then(() => push('/login'));
  }, [queryClient, logout, push]);

  // eslint-disable-next-line unicorn/no-null
  return null;
};

export default Logout;
