import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import CustomTypography from '../../Common/Typography';
import Button from '../../Common/Button';
import SearchBar from '../../Common/SearchBar';
import UserProfile from '../../Common/UserProfile';
import IconButtonWithBadge from '../../Common/IconButtonWithBadge';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ width: '100%', bgcolor: '#f7f9fc' }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 4 },
          py: { xs: 0.75, sm: 1.5 },
          minHeight: { xs: 56, sm: 64 },
        }}
      >
        {/* Left: Logo */}
        <CustomTypography
          variant="h6"
          color="primary"
          fontWeight={700}
          sx={{ fontSize: { xs: '1rem', sm: '1.4rem' } }}
        >
          Healthcare.
        </CustomTypography>

        {/* Center: Search Bar */}
        {!isMobile && <SearchBar disabled />}

        {/* Right: Actions */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButtonWithBadge icon={<NotificationsIcon fontSize="small" />} />
          <UserProfile name="Dr. Kumar" avatarSrc="/assets/avatar.png" />
          <Button >+</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
