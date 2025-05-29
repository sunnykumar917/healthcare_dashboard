import React from 'react';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder = 'Search...', disabled = false, width = 300 }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      px: 2,
      py: 0.5,
      borderRadius: 1,
      border: '1px solid #e0e0e0',
      width,
    }}
  >
    <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
    <InputBase
      placeholder={placeholder}
      disabled={disabled}
      sx={{
        fontSize: '0.9rem',
        color: 'text.secondary',
        width: '100%',
        cursor: disabled ? 'not-allowed' : 'text',
      }}
    />
  </Box>
);

export default SearchBar;
