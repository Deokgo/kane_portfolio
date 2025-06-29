import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import Portfolio from './Portfolio';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <Container sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        minWidth: '100vw',
        backgroundColor: '#1A1818' 
      }} >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
