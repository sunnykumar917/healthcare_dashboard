import React from 'react';
import { Card, CardContent } from '@mui/material';

const CustomCard = ({
  children,
  bgColor,
  width,
  height,
  hoverEffect = true,
  contentPadding = 1,
  withContent = true,
  sx = {},
  ...rest
}) => {
  return (
    <Card
      sx={{
        mb: 1,
        width,
        height,
        backgroundColor: "#dce2f8",
        color: bgColor ? 'white' : 'inherit',
        borderRadius: 2,
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        ...(hoverEffect && {
          '&:hover': {
            backgroundColor: '#e3f2fd',
            boxShadow: 5,
            cursor: 'pointer',
          },
        }),
        ...sx,
      }}
      {...rest}
    >
      {withContent ? (
        <CardContent sx={{ p: contentPadding }}>{children}</CardContent>
      ) : (
        children
      )}
    </Card>
  );
};

export default CustomCard;
