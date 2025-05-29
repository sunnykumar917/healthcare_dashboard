import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import human from '../../../assets/human-anatomy.png';
import CustomTypography from '../../Common/Typography';
import PositionedLabel from '../../Common/Label';
import { healthStatuses } from '../../../Data/healthStatuses';

const statusColor = (status) =>
  status?.toLowerCase() === 'healthy' ? '#4caf50' : '#f44336';

const HealthStatusCard = ({ label, status, date = 'May 29, 2025', score = 70 }) => {
  const color = statusColor(status);

  return (
    <Box sx={{ width: '100%', mb: 1, p: 0 }}>
      <CustomTypography variant="subtitle2" fontWeight="bold" mb={0.5}>
        {label}
      </CustomTypography>

      <Typography variant="caption" color="text.secondary" mb={1}>
        {date}
      </Typography>

      <Box sx={{ width: '100%',backgroundColor: '#f7fafe', }}>
        <LinearProgress
          variant="determinate"
          value={score}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: 'transparent', 
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
        <Box mt={0.5} textAlign="right">
          <Typography variant="caption" color="text.secondary">
            {score}/100
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const AnatomySection = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      mx: 'auto',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 550,
        backgroundColor: '#f7fafe',
        position: 'relative',
      }}
    >
      <img
        src={human}
        alt="Human Anatomy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      {healthStatuses.map((item, index) => (
        <PositionedLabel
          key={index}
          top={item.top}
          left={item.left}
          bgColor={statusColor(item.status)}
        >
          {item.label}: {item.status}
        </PositionedLabel>
      ))}
    </Box>
  </Box>
);


const DashboardOverview = () => {
  return (
    <Box sx={{ maxWidth: '465px', mb: 0, pb: 0 }}>
      <CustomTypography variant="h5" fontWeight="bold" mb={1}>
        Dashboard
      </CustomTypography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          alignItems: 'flex-start',
        }}
      >
        <Box flex={1}>
          <AnatomySection />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          {healthStatuses
            .filter((item) => ['Lungs', 'Teeth', 'Bone'].includes(item.label))
            .map((item, index) => (
              <HealthStatusCard
                key={index}
                label={item.label}
                status={item.status}
                date="May 29, 2025"
                score={Math.floor(Math.random() * 21) + 70} 
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardOverview;
