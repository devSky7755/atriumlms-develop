import { Box, SxProps, Theme } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

type Props = LazyLoadImageProps & {
  effect?: string | undefined;
  sx?: SxProps<Theme>;
};

const LazyImage = forwardRef<typeof LazyLoadImage, Props>(function Image(
  // eslint-disable-next-line react/prop-types
  { effect = 'blur', sx, ...props }: Props,
  ref: ForwardedRef<typeof LazyLoadImage>,
) {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        '& .wrapper': { width: 1, height: 1, backgroundSize: 'cover !important' },
        ...sx,
      }}
    >
      <Box
        ref={ref}
        component={LazyLoadImage}
        effect={effect}
        placeholderSrc="/image-placeholder.svg"
        wrapperClassName="wrapper"
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
        {...props}
      />
    </Box>
  );
  /* eslint-enable react/jsx-props-no-spreading */
});

export default LazyImage;
