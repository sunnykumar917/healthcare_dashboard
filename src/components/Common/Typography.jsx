import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({
  variant = 'body1',
  color = 'text.primary',
  fontWeight = 400,
  mb = 0,
  sx = {},
  children,
  ...rest
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      sx={{ fontWeight, mb, ...sx }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
