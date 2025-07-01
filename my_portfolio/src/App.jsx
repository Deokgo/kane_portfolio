import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box  } from '@mui/material';
import Portfolio from './Portfolio';
import Landing from './Landing'; // your landing/home component

function App() {
  return (
    <Router>
      <Box
        component="img"
        src="/src/assets/poly_image2.svg"
        alt="Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5, // ✅ set desired transparency
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
