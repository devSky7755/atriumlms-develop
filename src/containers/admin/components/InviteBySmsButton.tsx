import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import React, { FunctionComponent } from 'react';

import { useInviteUserBySms } from '../../../hooks';
import { User } from '../../../hooks/useUsers';
import { AxiosError } from 'axios';

type Props = {
  projectId: string;
  user: User;
};

const InviteBySmsButton: FunctionComponent<Props> = function ({ projectId, user }) {
  const { enqueueSnackbar } = useSnackbar();
  const inviteUserBySmsMutation = useInviteUserBySms();

  return (
    <GridActionsCellItem
      key="invite-phone"
      icon={<PhoneAndroidIcon />}
      label="Invite by sms"
      disabled={!user.phone_number}
      onClick={() =>
        inviteUserBySmsMutation.mutate(
          {
            user: { id: user.user_id },
            project: { id: projectId },
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
        )
      }
    />
  );
};

export default InviteBySmsButton;
