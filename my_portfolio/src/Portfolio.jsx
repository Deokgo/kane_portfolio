import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box, Tabs, Tab, Button, IconButton } from '@mui/material';
import { Contact } from './Sections/Contacts';
import { About } from './Sections/About';
import { Projects } from './Sections/Projects';
import { Practicum } from './Sections/Practicum';
import { useNavigate, useLocation } from 'react-router-dom';
import Slide from '@mui/material/Slide';

const sections = [
  { label: 'About', id: 'about', component: <About /> },
  { label: 'Projects', id: 'projects', component: <Projects /> },
  { label: 'Practicum', id: 'practicum', component: <Practicum /> },
  { label: 'Contact', id: 'contact', component: <Contact /> },
];

export default function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(0);
  const [prevTab, setPrevTab] = React.useState(0);
  const [slideIn, setSlideIn] = React.useState(true);
  const [slideDirection, setSlideDirection] = React.useState('left');

  React.useEffect(() => {
    if (location.hash) {
      const idx = sections.findIndex(s => `#${s.id}` === location.hash);
      if (idx !== -1) setTab(idx);
    }
  }, [location.hash]);

  const handleTabChange = (e, newValue) => {
    setSlideDirection(newValue > tab ? 'left' : 'right');
    setPrevTab(tab);
    setSlideIn(false);
    setTimeout(() => {
      setTab(newValue);
      setSlideIn(true);
      navigate(`#${sections[newValue].id}`);
    }, 100);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#1A1818' }}>
        <Toolbar sx={{ height: 80, px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 10 }}>
            <IconButton
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ mr: 6 }}
            >
              <img src="/src/assets/kane_logo.png" alt="Logo" style={{ height: 60 }} />
            </IconButton>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              centered
              sx={{
                minHeight: 50,
                '& .MuiTabs-indicator': {
                  bottom: 0,
                  backgroundColor: '#E7694B',
                },
                '& .MuiTab-root': {
                  minHeight: 70,
                  paddingBottom: 0,
                  color: '#fff', // Unselected tab text color
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#E7694B', // Selected tab text color
                  fontWeight: 'bold',
                },
              }}
              TabIndicatorProps={{ style: { bottom: 0 } }}
            >
              {sections.map((section) => (
                <Tab key={section.id} label={section.label} />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{
        py: 15,
        display: 'flex', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        minWidth: '100%',
        position: 'relative',
        width: '75vw',
        overflow: 'hidden', // Prevent scrollbars during slide transitions
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}>
          {/* Previous Component sliding out */}
          {!slideIn && (
            <Slide in={slideIn} direction={slideDirection === 'left' ? 'right' : 'left'} timeout={250}>
              <Box sx={{ position: 'absolute', width: '100%' }}>
                {sections[prevTab].component}
              </Box>
            </Slide>
          )}

          {/* Current Component sliding in */}
          {slideIn && (
            <Slide in={slideIn} direction={slideDirection} timeout={250}>
              <Box sx={{ position: 'absolute', width: '100%' }}>
                {sections[tab].component}
              </Box>
            </Slide>
          )}
      </Container>
    </Box>
  );
}
