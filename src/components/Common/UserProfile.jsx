import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const UserProfile = ({ name = 'User', avatar = '/assets/avatar.png', showName = true }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Avatar alt={name} src={avatar} sx={{ width: 32, height: 32 }} />
    {showName && (
      <Typography variant="body2" color="text.primary">
        {name}
      </Typography>
    )}
  </Box>
);

export default UserProfile;
