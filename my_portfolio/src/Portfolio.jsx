import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box, Tabs, Tab, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Contact } from './Sections/Contacts';
import { About } from './Sections/About';
import { Projects } from './Sections/Projects';
import { Practicum } from './Sections/Practicum';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
  { label: 'About Me', id: 'about', component: <About /> },
  { label: 'Projects', id: 'projects', component: <Projects /> },
  { label: 'Practicum', id: 'practicum', component: <Practicum /> },
  { label: 'Contact', id: 'contact', component: <Contact /> },
];

export default function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(0);
  const [displayTab, setDisplayTab] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [slideDirection, setSlideDirection] = React.useState('left');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const path = location.pathname.split('/')[2] || 'about';
    const idx = sections.findIndex((s) => s.id === path); // ✅ declared here
    if (idx !== -1 && idx !== tab) {
      setTab(idx);
      setDisplayTab(idx);
    }
  }, [location.pathname]);


  const handleTabChange = (e, newValue) => {
    if (newValue === tab || isTransitioning) return;

    setSlideDirection(newValue > tab ? 'left' : 'right');
    setIsTransitioning(true);

    // Phase 1: Fade out current content
    setTimeout(() => {
      // Phase 2: Change content and start slide in
      setDisplayTab(newValue);
      setTab(newValue);
      navigate(`/portfolio/${sections[newValue].id}`); // <-- FIXED HERE

      // Phase 3: Complete transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200); // Small delay to ensure smooth transition
    }, 200); // Fade out duration
  };

  const handleDrawerTabClick = (idx) => {
    setDrawerOpen(false);
    handleTabChange(null, idx);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#1A1818' }}>
        <Toolbar sx={{ height: 70, px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 20}}>
            <IconButton
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ mr: 2 }}
            >
              <img src="/src/assets/kane_white.svg" alt="Logo" style={{ height: 60 }} />
            </IconButton>
            {/* Hamburger for mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Tabs for desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
              <Tabs
                value={tab}
                onChange={handleTabChange}
                centered
                sx={{
                  minHeight: 40,
                  '& .MuiTabs-indicator': {
                    bottom: 0,
                    backgroundColor: '#E7694B',
                  },
                  '& .MuiTab-root': {
                    minHeight: 70,
                    paddingBottom: 0,
                    color: '#FFF',
                    transition: 'color 0.3s ease',
                  },
                  '& .MuiTab-root.Mui-selected': {
                    color: '#E7694B',
                    fontWeight: 'bold',
                    px: 2,
                    fontSize: '1.1rem',
                  },
                  '& .MuiTab-root:hover': {
                    color: '#E7694B',
                    opacity: 0.8,
                  },
                }}
                TabIndicatorProps={{ 
                  style: { 
                    bottom: 0,
                    transition: 'all 0.0s cubic-bezier(0.4, 0, 0.2, 1)'
                  } 
                }}
              >
                {sections.map((section) => (
                  <Tab key={section.id} label={section.label} />
                ))}
              </Tabs>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 220, bgcolor: '#1A1818', color: '#fff' } }}
      >
        <List>
          {sections.map((section, idx) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton selected={tab === idx} onClick={() => handleDrawerTabClick(idx)}>
                <ListItemText primary={section.label} sx={{ pl: 1, color: tab === idx ? '#E7694B' : '#fff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            opacity: isTransitioning ? 0 : 1,
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: isTransitioning ? 'blur(2px)' : 'blur(0px)',
            textAlign: 'center',
          }}
        >
          <Routes>
            {sections.map((section) => (
              <Route
                key={section.id}
                path={section.id}
                element={
                  <Box
                    sx={{
                      opacity: isTransitioning ? 0 : 1,
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      filter: isTransitioning ? 'blur(2px)' : 'blur(0px)',
                      textAlign: 'center',
                    }}
                  >
                    {section.component}
                  </Box>
                }
              />
            ))}
            {/* Optional fallback if no path matches */}
            <Route path="*" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}