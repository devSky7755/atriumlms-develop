import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import React, { ForwardedRef, forwardRef } from 'react';

type Props = BoxProps & {
  width?: number;
  height?: number;
  variant: 'white' | 'dark';
};

const Logo = forwardRef<typeof Box, Props>(function Logo(
  // eslint-disable-next-line react/prop-types
  { width = 208, height = 60, variant, sx }: Props,
  ref: ForwardedRef<typeof Box>,
) {
  return (
    <Box ref={ref} sx={{ width, height, ...sx }}>
      <Image src={`/logo-${variant}.png`} width={width} height={height} />
    </Box>
  );
});

export default Logo;
