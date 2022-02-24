import { useQuery, UseQueryResult } from 'react-query';

import { axios } from '../api';

export type User = {
  user_id: string;
  'safe-t-id'?: string;
  registry_number?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  password_set: string;
};

export type Users = User[];

export type UsersQueryKey = [string, { id: string }];

const useUsers = (projectId: string): UseQueryResult<Users> => {
  return useQuery<Users, unknown, Users, UsersQueryKey>(
    ['project', { id: projectId }],
    async ({ queryKey: [, { id }] }) => {
      const response = await axios.get(`/api/user?project_id=${id}`);
      return response.data as Users;
    },
    {
      enabled: Boolean(projectId),
    },
  );
};

export default useUsers;
