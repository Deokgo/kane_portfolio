import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box, Tabs, Tab, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from '../utils/ThemeToggleButton';
import { useThemeMode } from '../utils/ThemeContext';
import { Contact } from '../pages/Contacts';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Practicum } from '../pages/Practicum';
import { Experience } from '../pages/Experience';
import { Achievements } from '../pages/Achievements';
import { useNavigate, useLocation } from 'react-router-dom';
import dark from '../assets/kane_white.svg';
import light from '../assets/kane_light.svg';
import ViewPDFButton from './ViewPDFButton';

const sections = [
  { label: 'About Me', id: 'about', component: <About /> },
  { label: 'Experience', id: 'experience', component: <Experience /> },
  { label: 'Projects', id: 'projects', component: <Projects /> },
  { label: 'Achievements', id: 'achievements', component: <Achievements /> },
  { label: 'Practicum', id: 'practicum', component: <Practicum /> },
  { label: 'Contacts', id: 'contact', component: <Contact /> },
];

export default function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode } = useThemeMode();
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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 15,
          width: { xs: '95vw', sm: '95vw', md: '90vw', lg: '85vw', xl: '80vw' },
          backgroundColor: mode === 'light' ? '#fff' : '#1A1818',
          color: theme.palette.text.primary,
          boxShadow: mode === 'light' ? '0 8px 32px rgba(231, 105, 75, 0.12), 0 1.5px 8px rgba(0,0,0,0.08)' : '0 8px 32px rgba(255, 255, 255, 0.10), 0 1.5px 8px rgba(0,0,0,0.18)',
          borderRadius: 8,
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ height: 30, px: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <IconButton
              onClick={() => navigate('/')}
              sx={{
                width: 55,
                height: 55,
                alignSelf: 'center',
                borderRadius: '50%',
                padding: 1,
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(231, 105, 75, 0.1)',
                },
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              <img src={mode === 'light' ? light : dark} alt="Logo" style={{ height: 35, width: 35 }} />
            </IconButton>
            {/* Tabs for desktop */}
            <Tabs
              value={tab}
              onChange={handleTabChange}
              centered
              sx={{
                display: { xs: 'none', md: 'flex', lg: 'flex' },
                minHeight: 65,
                '& .MuiTabs-indicator': {
                  bottom: 0,
                  py: 0.1,
                  backgroundColor: '#E7694B',
                },
                '& .MuiTab-root': {
                  minHeight: 60,
                  width: 105,
                  paddingBottom: 0,
                  color: theme.palette.text.primary,
                  fontSize: '0.7rem',
                  transition: 'color 0.7s ease',
                  border: 'none',           // Remove borders
                  outline: 'none',          // Remove outline
                  boxShadow: 'none',        // Remove box shadow
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#E7694B',
                  fontWeight: 'bold',
                  px: 1,
                  border: 'none',           // Remove any borders
                  outline: 'none',          // Remove outline
                  boxShadow: 'none',        // Remove box shadow
                },
                '& .MuiTab-root:hover': {
                  color: '#E7694B',
                  opacity: 0.8,
                },
                '& .MuiTab-root:focus': {
                  outline: 'none',
                  border: 'none',
                },
              }}
              TabIndicatorProps={{ 
                style: { 
                  bottom: 0,
                  transition: 'all 0.0s cubic-bezier(0.4, 0, 0.2, 1)'
                } 
              }}
            >
              {sections.map((section, idx) => (
                <Tab key={section.id} label={section.label} />
              ))}
            </Tabs>

            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <ViewPDFButton pdfUrl="/cometa_kane_curriculum_vitae.pdf" sx={{ color: theme.palette.text.primary, mx: 1 }} />
              <ThemeToggleButton />
              <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, alignItems: 'center', gap: 1 }}>
                <IconButton 
                  sx={{ 
                    color: theme.palette.text.primary,
                    '&:focus': {
                      outline: 'none',
                    },
                    '&.Mui-focusVisible': {
                      outline: 'none',
                    }, 
                  }} onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ 
          sx: { 
            width: 250, 
            bgcolor: mode === 'light' ? '#fff' : '#1A1818', 
            color: theme.palette.text.primary 
          } 
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Kalnia, serif',
            color: theme.palette.text.primary,
            lineHeight: 1,
            py: 3,
            textAlign: 'center',
            fontSize: '2rem'
          }}
        >
          Menu
        </Typography>
        <List>
          {sections.map((section, idx) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton selected={tab === idx} onClick={() => handleDrawerTabClick(idx)}>
                <ListItemText 
                  primary={section.label} 
                  sx={{ 
                    pl: 1, 
                    color: tab === idx ? '#E7694B' : theme.palette.text.primary 
                  }} 
                />
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