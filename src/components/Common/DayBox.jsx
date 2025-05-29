import React from 'react';
import { Box } from '@mui/material';
import CustomTypography from './Typography';

const DayBox = ({ weekday, date, times }) => {
  return (
    <Box
      sx={{
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#e3f2fd',
          boxShadow: 3,
          cursor: 'pointer',
        }
      }}
    >
      <CustomTypography variant="h6" fontWeight="bold">
        {weekday}
      </CustomTypography>
      <CustomTypography variant="h5" fontWeight="bold" color="#1976d2" mb={1}>
        {date}
      </CustomTypography>
      {times.map((time, index) => (
        <CustomTypography
          key={index}
          variant="body2"
          sx={{ fontSize: '0.875rem', color: '#333', width: '100%', textAlign: 'center' }}
        >
          {time}
        </CustomTypography>
      ))}
    </Box>
  );
};

export default DayBox;
