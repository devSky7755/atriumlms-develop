import { useMutation } from 'react-query';

import { axios } from '../api';

export type InviteUserBySmsMutationData = {
  user: {
    id: string;
  };
  project: {
    id: string;
  };
};

export const useInviteUserBySms = () => {
  return useMutation(
    async ({ user: { id: userId }, project: { id: projectId } }: InviteUserBySmsMutationData) => {
      const response = await axios.post('/api/user/invite', {
        user_id: userId,
        invitation_type: 'mail',
        project_id: projectId,
      });

      return response.data;
    },
  );
};
