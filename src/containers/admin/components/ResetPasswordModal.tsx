import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Modal, Stack, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import React, { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';

import { LoadingButton, RHFTextField } from '../../../components';
import { useResetPassword } from '../../../hooks';
import { User } from '../../../hooks/useUsers';

type Props = {
  user: User;
  projectId: string;
  open: boolean;
  onClose: () => void;
};

type FieldValues = {
  password: string;
  confirmPassword: string;
  __submit?: string;
};

const defaultValues: FieldValues = {
  password: '',
  confirmPassword: '',
};

const yupFieldSchema = yup
  .object({
    password: yup.string().required('Password is required field'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required field')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

const ResetPasswordModal: FunctionComponent<Props> = function ({
  user,
  projectId,
  open,
  onClose: defaultOnClose,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const resetPasswordMutation = useResetPassword();
  const queryClient = useQueryClient();

  const {
    setError,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    reset,
    clearErrors,
  } = useForm<FieldValues>({
    resolver: yupResolver(yupFieldSchema),
    defaultValues,
  });

  const onClose = () => {
    reset();
    clearErrors();
    defaultOnClose();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    resetPasswordMutation.mutate(
      { user: { id: user.user_id, password: data.password } },
      {
        onSuccess: () => {
          onClose();
          enqueueSnackbar('Password was successfully updated');
          queryClient.refetchQueries(['project', { id: projectId }]);
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          const message = axiosError?.response?.data?.message || (error as Error).message;
          if (axiosError.response?.status === 401) {
            setError('__submit', { message: 'Wrong username or password' });
          } else {
            setError('__submit', { message });
          }
        },
      },
    );
  };

  return (
    <Modal
      keepMounted={false}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reset password
        </Typography>
        <Alert id="modal-modal-description" severity="info" variant="outlined" sx={{ mt: 2 }}>
          Set the password of the user. This password will only be shown to you now and can not be
          consulted later. This password is not sent to the user but should be communicated manually
          to the user.
        </Alert>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ marginTop: 3 }}>
          <Stack direction="column" spacing={2}>
            {/* eslint-disable-next-line no-underscore-dangle */}
            {errors.__submit && <Alert severity="error">{errors.__submit.message}</Alert>}
            <RHFTextField
              control={control}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
            <RHFTextField
              control={control}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              variant="outlined"
              fullWidth
            />
            <LoadingButton loading={isSubmitting} type="submit" variant="contained">
              Reset password
            </LoadingButton>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResetPasswordModal;
