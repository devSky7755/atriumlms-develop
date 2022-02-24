import { FunctionComponent, useEffect } from 'react';

import { useAuth } from '../hooks';

const AuthGuard: FunctionComponent = function ({ children }) {
  const { isAuthenticated } = useAuth();
  // eslint-disable-next-line unicorn/no-null,react/jsx-no-useless-fragment
  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
