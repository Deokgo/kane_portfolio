import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { useThemeMode } from './ThemeContext';
import Portfolio from './Portfolio';
import Landing from './Landing'; // your landing/home component
import polyDark from './assets/poly_image_dark.svg';
import polyLight from './assets/poly_image_light.svg';

function App() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  

  return (
    <Router>
      {/* Background image overlay with opacity */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: mode === 'light' ? `url(${polyLight})` : `url(${polyDark})`, // Use different images for different modes
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            filter: mode === 'light' ? 'brightness(2)' : 'brightness(0.6)', // Darken the image (0.5 = 50% darker, 1.0 = normal)
          }}
        />
      </Box>
      {/* Main content above background */}
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
