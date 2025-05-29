import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function IconButtonWithBadge() {
  return (
    <IconButton aria-label="notifications">
      <Badge badgeContent={4} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
