import { createContext, FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from 'react-use';

import { axios } from '../api';
import { deleteAxiosAuthorizationHeader, setAxiosAuthorizationHeader } from './helpers';

interface Auth {
  isAuthenticated: boolean;
  accessToken?: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<Auth>({
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

const AuthProvider: FunctionComponent = function ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken, deleteAccessToken] = useLocalStorage<string | undefined>(
    'accessToken',
  );

  useEffect(() => {
    if (accessToken) {
      setAxiosAuthorizationHeader(accessToken);
      setIsAuthenticated(true);
    } else {
      deleteAxiosAuthorizationHeader();
    }
  }, [accessToken]);

  const login = async (username: string, password: string) => {
    const { data } = await axios.post('/api/oauth/auth', {
      grant_type: 'password',
      username,
      password,
      client_id: 1,
    });
    setAccessToken(data.access_token);
    setIsAuthenticated(true);
    setAxiosAuthorizationHeader(data.access_token);
  };

  const logout = async () => {
    deleteAccessToken();
    setIsAuthenticated(false);
    deleteAxiosAuthorizationHeader();
  };

  const providerState = useMemo(
    () => ({
      isAuthenticated,
      accessToken,
      login,
      logout,
    }),
    [isAuthenticated],
  );

  return <AuthContext.Provider value={providerState}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
