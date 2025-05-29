import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        textTransform: 'none',
        fontSize: '0.875rem',
        fontWeight: 500,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
