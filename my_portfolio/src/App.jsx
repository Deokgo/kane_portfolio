import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box  } from '@mui/material';
import Portfolio from './Portfolio';
import Landing from './Landing'; // your landing/home component
import polyImage from './assets/poly_image2.svg';

function App() {
  return (
    <Router basename="/kane_portfolio/">
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
            backgroundImage: `url(${polyImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Change this value for desired transparency
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
