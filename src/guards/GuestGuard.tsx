import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';

import { useAuth } from '../hooks';

const AuthGuard: FunctionComponent = function ({ children }) {
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      // noinspection JSIgnoredPromiseFromCall
      push('/redirect');
    }
  }, [isAuthenticated]);

  // eslint-disable-next-line unicorn/no-null,react/jsx-no-useless-fragment
  return !isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
