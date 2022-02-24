import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AxiosError } from 'axios';
import { FunctionComponent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoadingButton, Page, RHFTextField } from '../components';
import { GuestGuard } from '../guards';
import { useAuth } from '../hooks';
import { NextPage } from '../types/next';

type FieldValues = {
  username: string;
  password: string;
  __submit?: string;
};

const defaultValues: FieldValues = {
  username: '',
  password: '',
};

const yupFieldSchema = yup
  .object({
    username: yup.string().required('Username is required field'),
    password: yup.string().required('Password is required field'),
  })
  .required();

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}));

const Main = styled('main')(({ theme }) => ({
  alignItems: 'center',
  borderRadius: 32,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(1, 'auto'),
  },
  [theme.breakpoints.up('xs')]: {
    margin: theme.spacing(1, 0),
  },
}));

const LoginForm: FunctionComponent = function () {
  const auth = useAuth();

  const {
    setError,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    setFocus,
  } = useForm<FieldValues>({
    resolver: yupResolver(yupFieldSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      await auth.login(data.username, data.password);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        setError('__submit', { message: 'Wrong username or password' });
      } else {
        setError('__submit', { message: axiosError.message });
      }
    }
  };

  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2}>
        {/* eslint-disable-next-line no-underscore-dangle */}
        {errors.__submit && <Alert severity="error">{errors.__submit.message}</Alert>}
        <RHFTextField
          control={control}
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
        />
        <RHFTextField
          control={control}
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
        <LoadingButton loading={isSubmitting} type="submit" variant="contained">
          Sign in
        </LoadingButton>
      </Stack>
    </form>
  );
};

const MiddleBox = function () {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const minWidth = !smDown ? 400 : undefined;
  const padding = (() => {
    if (smDown) {
      return theme.spacing(5, 2);
    }
    return theme.spacing(5, 3);
  })();
  const width = (() => {
    if (smDown) {
      return '95%';
    }
    return minWidth;
  })();

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        minWidth,
        padding,
        transition: 'all 0.2s ease-in-out',
        width,
      }}
    >
      <Box sx={{ flexGrow: 1, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Sign in
        </Typography>
      </Box>
      <LoginForm />
    </Box>
  );
};

export const Login: NextPage = function () {
  return (
    <GuestGuard>
      <Page title="Sign in">
        <Root>
          <Main>
            <MiddleBox />
          </Main>
        </Root>
      </Page>
    </GuestGuard>
  );
};

export default Login;
