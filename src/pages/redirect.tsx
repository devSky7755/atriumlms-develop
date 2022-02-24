import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useUserinfo } from '../hooks';
import type { NextPage } from '../types/next';

const Redirect: NextPage = function () {
  const { push } = useRouter();
  const userinfo = useUserinfo();

  useEffect(() => {
    if (!userinfo.isSuccess) {
      return;
    }

    if (userinfo.data.isAdmin) {
      // noinspection JSIgnoredPromiseFromCall
      push('/admin');
    } else {
      // noinspection JSIgnoredPromiseFromCall
      push('/');
    }
  }, [userinfo, push]);

  // eslint-disable-next-line unicorn/no-null
  return null;
};

export default Redirect;
