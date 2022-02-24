import { useMutation } from 'react-query';

import { axios } from '../api';

export type ResetPasswordMutationData = {
  user: {
    id: string;
    password: string;
  };
};

export const useResetPassword = () => {
  return useMutation(async ({ user: { id, password } }: ResetPasswordMutationData) => {
    const response = await axios.post('/api/user/password', {
      user_id: id,
      password,
    });

    return response.data;
  });
};
