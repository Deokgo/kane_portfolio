import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from './ThemeContext';

export const ThemeToggleButton = ({ sx = {} }) => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`} 
      componentsProps={{
        popper: {
          sx: {
            '& .MuiTooltip-tooltip': {
              fontSize: '0.75rem',
            },
          },
        },
      }}
    >
      <span style={{ display: 'inline-flex' }}>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{
            ...sx,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#E7694B',
              transform: 'rotate(180deg)',
            },
          }}
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ThemeToggleButton;
