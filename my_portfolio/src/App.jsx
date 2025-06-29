import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { About, Projects, Skills, Contact } from './Sections';
import './App.css';

function App() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
    </Box>
  );
}

export default App;
