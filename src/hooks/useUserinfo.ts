import { useQuery, UseQueryOptions } from 'react-query';

import { axios, isAxiosError } from '../api';

export type UserInfo = {
  isAdmin: boolean;
};

export type AdminUserInfo = UserInfo & {
  user?: {
    email: string;
  };
  projects: { project_id: string }[];
};

const useUserinfo = (options?: UseQueryOptions<UserInfo, unknown, UserInfo, string[]>) => {
  return useQuery(
    ['userinfo'],
    () => {
      return axios
        .get<AdminUserInfo>(`/api/configuration`)
        .then(
          (response) =>
            ({
              ...response.data,
              isAdmin: true,
            } as AdminUserInfo),
        )
        .catch((error) => {
          if (isAxiosError(error) && error?.response?.status === 409) {
            return {
              isAdmin: false,
            };
          }
          throw error;
        });
    },
    options,
  );
};

export default useUserinfo;
