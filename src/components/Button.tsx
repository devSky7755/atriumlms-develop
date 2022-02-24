import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { FunctionComponent } from 'react';

type ButtonProps = MuiButtonProps;

const Button: FunctionComponent<ButtonProps> = function (props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiButton {...props} />;
};

export default Button;
