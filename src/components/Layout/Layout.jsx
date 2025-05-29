import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Header from '../Layout/Header/Header';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const sidebarWidth = isMobile ? 45 : isTablet ? 72 : 240;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <Header />

      <Box sx={{ height: 'calc(100vh - 64px)', display: 'flex' }}>
        <Sidebar />

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 2, md: 3 },
            ml: `${sidebarWidth}px`,  // <-- add margin-left equal to sidebar width
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
