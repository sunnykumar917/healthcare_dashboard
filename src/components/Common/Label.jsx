import React from 'react';
import { Box } from '@mui/material';

const PositionedLabel = ({ top, left, bgColor, children }) => (
  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      transform: 'translate(-50%, -50%)',
      backgroundColor: bgColor,
      color: 'white',
      borderRadius: 1,
      px: 1,
      py: 0.5,
      fontSize: '0.7rem',
      pointerEvents: 'none',
    }}
  >
    {children}
  </Box>
);

export default PositionedLabel;
