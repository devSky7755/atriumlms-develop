import { useMutation } from 'react-query';
import { UseMutationOptions } from 'react-query/types/react/types';

import { axios } from '../api';

export type EditUserData = {
  id: string;
  email?: string;
  phoneNumber?: string;
};

export const useEditUser = (
  options?: UseMutationOptions<EditUserData, unknown, EditUserData, unknown>,
) => {
  return useMutation(async ({ id, email, phoneNumber }: EditUserData) => {
    const response = await axios.post('/api/user', {
      user_id: id,
      email,
      phone_number: phoneNumber,
    });

    return response.data;
  }, options);
};
