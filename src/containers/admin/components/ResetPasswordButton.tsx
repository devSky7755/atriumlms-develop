import LockResetIcon from '@mui/icons-material/LockReset';
import { GridActionsCellItem } from '@mui/x-data-grid';
import React, { FunctionComponent } from 'react';

import { User } from '../../../hooks/useUsers';
import ResetPasswordModal from './ResetPasswordModal';

type Props = {
  user: User;
  projectId: string;
};

const ResetPasswordButton: FunctionComponent<Props> = function ({ user, projectId }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <GridActionsCellItem
        key="reset-password"
        icon={<LockResetIcon />}
        label="Reset password"
        onClick={() => setOpen(true)}
      />
      <ResetPasswordModal
        user={user}
        projectId={projectId}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ResetPasswordButton;
