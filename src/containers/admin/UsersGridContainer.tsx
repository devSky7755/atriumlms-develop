import { Input, TextField } from '@mui/material';
import {
  DataGrid,
  GridCallbackDetails,
  GridCellEditCommitParams,
  GridCellParams,
  GridColumns,
  GridRenderCellParams,
  GridRenderEditCellParams,
  GridRowParams,
  GridToolbar,
  MuiBaseEvent,
} from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { FunctionalComponent } from 'preact';
import React, { ChangeEvent, ReactElement, RefObject, useCallback, useMemo } from 'react';
import { useQueryClient } from 'react-query';

import { useUsers } from '../../hooks';
import { useEditUser } from '../../hooks/useEditUser';
import { User } from '../../hooks/useUsers';
import { InviteByEmailButton, InviteBySmsButton, ResetPasswordButton } from './components';
import { AxiosError } from 'axios';

type Props = {
  projectId: string;
};

const InputCell: FunctionalComponent<GridRenderCellParams<string>> = function ({
  id,
  value,
  api,
  field,
  hasFocus,
}: GridRenderCellParams<string>) {
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    api.setEditCellValue({ id, field, value: String(event.target.value) }, event);
  };
  return <TextField value={value} onChange={handleChange} variant="outlined" focused={hasFocus} />;
};
const UsersGridContainer: FunctionalComponent<Props> = function ({ projectId }: Props) {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { data: users, isLoading, isFetched } = useUsers(projectId);
  const editUser = useEditUser();

  const onCellEditCommit = useCallback(
    async (
      { id, field, value }: GridCellEditCommitParams,
      event: MuiBaseEvent,
      details: GridCallbackDetails,
    ) => {
      const user = users?.find((v) => v.user_id === id);

      function resetDataGrid() {
        details.api?.setCellMode(id, field, 'view');
        queryClient.refetchQueries(['project', { id: projectId }]);
      }

      if (field === 'email' && user && user.email !== (value as string)) {
        editUser.mutate(
          { id: id as string, email: value as string },
          {
            onSuccess: () => {
              enqueueSnackbar(`Email was successfully updated!`);
              resetDataGrid();
            },
            onError: (e: unknown) => {
              const message = (e as AxiosError)?.response?.data?.message || (e as Error).message;
              enqueueSnackbar(`Email wasn't updated. Error: ${message}`);
              resetDataGrid();
            },
          },
        );
      }
      if (field === 'phone_number' && user && user.phone_number !== (value as string)) {
        editUser.mutate(
          { id: id as string, phoneNumber: value as string },
          {
            onSuccess: () => {
              enqueueSnackbar(`Phone number was successfully updated!`);
              resetDataGrid();
            },
            onError: (e: unknown) => {
              const message = (e as AxiosError)?.response?.data?.message || (e as Error).message;
              enqueueSnackbar(`Phone number wasn't updated. Error: "${message}"`);
              resetDataGrid();
            },
          },
        );
      }
    },
    [editUser],
  );

  const onCellEditStart = useCallback(
    async (
      { id, field, value }: GridCellParams,
      event: MuiBaseEvent,
      details: GridCallbackDetails,
    ) => {
      details.api?.setCellMode(id, field, 'view');
    },
    [],
  );

  const onCellEditStop = useCallback(
    async (
      { id, field, value }: GridCellParams,
      event: MuiBaseEvent,
      details: GridCallbackDetails,
    ) => {
      details.api?.setCellMode(id, field, 'view');
    },
    [],
  );

  const columns = useMemo<GridColumns>(
    () => [
      {
        field: 'registry_number',
        headerName: 'Registry number',
        type: 'string',
        minWidth: 100,
        flex: 1,
      },
      { field: 'first_name', headerName: 'First name', type: 'string', minWidth: 70, flex: 1 },
      { field: 'last_name', headerName: 'Last name', type: 'string', minWidth: 70, flex: 1 },
      {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        editable: true,
        pinnable: false,
        hideable: false,
        minWidth: 170,
        flex: 1,
        renderEditCell: (params: GridRenderEditCellParams) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <InputCell {...(params as GridRenderCellParams)} />;
        },
      },
      {
        field: 'phone_number',
        headerName: 'Phone number',
        type: 'string',
        editable: true,
        pinnable: false,
        hideable: false,
        minWidth: 125,
        flex: 1,
        renderEditCell: (params: GridRenderEditCellParams) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <InputCell {...(params as GridRenderCellParams)} />;
        },
      },
      {
        field: 'password_set',
        headerName: 'Has password',
        type: 'boolean',
        minWidth: 90,
        flex: 1,
      },
      {
        headerName: 'Actions',
        field: 'actions',
        type: 'actions',
        pinnable: false,
        hideable: false,
        minWidth: 120,
        flex: 1,
        // eslint-disable-next-line react/no-unstable-nested-components
        getActions: ({ row: user }: GridRowParams<User>) => [
          <InviteByEmailButton key="invite-by-email" user={user} projectId={projectId} />,
          <InviteBySmsButton key="invite-by-sms" user={user} projectId={projectId} />,
          <ResetPasswordButton key="reset-password" user={user} projectId={projectId} />,
        ],
      },
    ],
    [],
  );

  return (
    <DataGrid
      logger={console}
      logLevel="debug"
      loading={isLoading && !isFetched}
      columns={columns}
      rows={users || []}
      rowsPerPageOptions={[10, 20, 30]}
      pageSize={10}
      getRowId={(row) => row.user_id}
      onCellEditCommit={onCellEditCommit}
      autoHeight={false}
      disableSelectionOnClick
      editMode="cell"
      onCellEditStart={onCellEditStart}
      onCellEditStop={onCellEditStop}
      sx={{
        padding: 2,
        borderRadius: 4,
        '& .MuiDataGrid-booleanCell[data-value="false"]': {
          color: '#ff1744',
        },
        '& .MuiDataGrid-booleanCell[data-value="true"]': {
          color: '#03a9f4',
        },
      }}
    />
  );
};

export default UsersGridContainer;
