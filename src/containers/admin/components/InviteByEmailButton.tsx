import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { FunctionComponent } from 'react';

import { useInviteUserByEmail } from '../../../hooks';
import { User } from '../../../hooks/useUsers';
import { AxiosError } from 'axios';

type Props = {
  projectId: string;
  user: User;
};

const InviteByEmailButton: FunctionComponent<Props> = function ({ projectId, user }) {
  const { enqueueSnackbar } = useSnackbar();
  const inviteUserByEmailMutation = useInviteUserByEmail();
  return (
    <GridActionsCellItem
      key="invite-email"
      icon={<ForwardToInboxIcon />}
      label="Invite by email"
      disabled={!user.email}
      onClick={() => {
        if (!user.email) {
          throw new Error("Email can't be null");
        }

        inviteUserByEmailMutation.mutate(
          {
            user: { id: user.user_id, registryNumber: user.registry_number, email: user.email },
            project: { id: projectId, role: 'user' },
          },
          {
            onSuccess: () => {
              enqueueSnackbar(`Invitation successfully sent!`);
            },
            onError: (e: unknown) => {
              const message = (e as AxiosError)?.response?.data?.message || (e as Error).message;
              enqueueSnackbar(`Invitation wasn't send. Error: ${message}`);
            },
          },
        );
      }}
    />
  );
};

// noinspection JSUnusedGlobalSymbols
export default InviteByEmailButton;
