import MuiLoadingButton from '@mui/lab/LoadingButton';
import { LoadingButtonProps } from '@mui/lab/LoadingButton/LoadingButton';
import React, { FunctionComponent } from 'react';

type Props = LoadingButtonProps;

const LoadingButton: FunctionComponent<Props> = function (props) {
  // eslint-disable-next-line react/jsx-props-no-spreading,react/jsx-no-useless-fragment
  return <MuiLoadingButton loadingPosition="start" startIcon={<></>} {...props} />;
};

export default LoadingButton;
