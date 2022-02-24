import { useMutation } from 'react-query';

import { axios } from '../api';

export type InviteByEmailMutationData = {
  user: {
    id: string;
    registryNumber?: string;
    email: string;
  };
  project: {
    id: string;
    role: string;
  };
};

export const useInviteUserByEmail = () => {
  return useMutation(async ({ user, project }: InviteByEmailMutationData) => {
    const response = await axios.post('/api/user?invite_user=mail', {
      user_id: user.id,
      registry_number: user.registryNumber,
      email: user.email,
      project: {
        project_id: project.id,
        role: project.role,
      },
    });

    return response.data;
  });
};
