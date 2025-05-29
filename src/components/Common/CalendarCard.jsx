import React from 'react';
import { Box, CardContent } from '@mui/material';
import CustomCard from './Card';
import CustomTypography from './Typography';

const Card = ({ title, icon, times = [], name, sx = {} }) => {
  return (
    <CustomCard withContent={false} sx={sx}>
      <CardContent sx={{ position: 'relative', padding: 2 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: '#dce2f8',
            borderRadius: '50%',
            padding: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>

        <CustomTypography variant="h6" fontWeight="bold" color="#1976d2" mb={1}>
          {title}
        </CustomTypography>

        {times.map((time, i) => (
          <CustomTypography
            key={i}
            variant="body2"
            sx={{ mb: 0.5, fontSize: '0.875rem', color: '#333' }}
          >
            {time}
          </CustomTypography>
        ))}

        <CustomTypography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
          With: {name}
        </CustomTypography>
      </CardContent>
    </CustomCard>
  );
};

export default Card;
