import React from 'react';
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from '@mui/material';
import CustomTypography from '../../Common/Typography';
import { topNavItems, settingItem } from '../../../Data/NavItems';



const SidebarContent = ({ showText }) => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box sx={{ p: 1 }}>
      {showText && (
        <>
          <CustomTypography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#2a3f7b' }}>
            General
          </CustomTypography>
          <Divider sx={{ mb: 2 }} />
        </>
      )}
      <List>
        {topNavItems.map((item) => (
          <Tooltip title={item.text} placement="right" arrow key={item.text}>
            <ListItemButton disableRipple sx={{ px: showText ? 1.5 : 0 }}>
              <ListItemIcon
                sx={{
                  color: '#4b5563',
                  minWidth: 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {showText && (
                <ListItemText
                  sx={{ ml: 1 }}
                  primary={
                    <CustomTypography variant="body2" sx={{ fontSize: 14, color: '#374151' }}>
                      {item.text}
                    </CustomTypography>
                  }
                />
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Box>

    <Box sx={{ p: 1 }}>
      <Divider sx={{ mb: 1 }} />
      <List>
        <Tooltip title={settingItem.text} placement="right" arrow>
          <ListItemButton disableRipple sx={{ px: showText ? 1.5 : 0 }}>
            <ListItemIcon
              sx={{
                color: '#4b5563',
                minWidth: 'auto',
                justifyContent: 'center',
              }}
            >
              {settingItem.icon}
            </ListItemIcon>
            {showText && (
              <ListItemText
                sx={{ ml: 1 }}
                primary={
                  <CustomTypography variant="body2" sx={{ fontSize: 14, color: '#374151' }}>
                    {settingItem.text}
                  </CustomTypography>
                }
              />
            )}
          </ListItemButton>
        </Tooltip>
      </List>
    </Box>
  </Box>
);

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const sidebarWidth = isMobile ? 45 : isTablet ? 72 : 240;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 64, // header height
        left: 0,
        width: sidebarWidth,
        height: 'calc(100vh - 64px)',
        background: '#f7fafe',
        borderRight: '1px solid #e0e0e0',
        zIndex: 1000,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <SidebarContent showText={!isMobile && !isTablet} />
    </Box>
  );
};

export default Sidebar;
