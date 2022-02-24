import { useContext } from 'react';

import { AuthContext } from '../auth';

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('Auth cannot be null, please add a context provider');
  }
  return auth;
};

export default useAuth;
