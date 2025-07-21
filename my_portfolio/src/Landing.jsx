import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from './ThemeContext';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ThemeToggleButton from './ThemeToggleButton';
import polyDark from './assets/poly_image_dark.svg';
import polyLight from './assets/poly_image_light.svg';
import profileSmall from './assets/profile_small.png';
import Slide from '@mui/material/Slide';
import DownloadIcon from '@mui/icons-material/Download';

export default function Landing() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [slideOut, setSlideOut] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState(false);

  const handlePortfolioClick = () => {
    setUnlocked(true);
    setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => navigate('/portfolio'), 500);
    }, 400);
  };

  return (
    <Slide
      in={!slideOut}
      direction="down"
      timeout={{ enter: 350, exit: 250 }}
      easing={{
        enter: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        exit: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)',
      }}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          overflowY: 'auto',         // ✅ Allow vertical scroll
          overflowX: 'hidden',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: mode === 'light' ? `url(${polyLight})` : `url(${polyDark})`, // Use different images for different modes
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 0.9,
            bgcolor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.7)' 
              : 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />
        {/* Theme toggle button */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 3,
          }}
        >
          <ThemeToggleButton sx={{ color: theme.palette.text.primary }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 2,
            p: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: 600,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Box
              component="img"
              src={profileSmall}
              alt="Logo"
              sx={{
                height: { xs: '10rem', md: '12rem' },
                maxWidth: '100%',
              }}
            />
          </Box>

          <Box
            sx={{
              mb: 2,
              transition: 'transform 0.3s',
              transform: unlocked ? 'rotate(20deg) scale(1.2)' : 'none',
            }}
          >
            {unlocked ? (
              <LockOpenIcon sx={{ fontSize: 30, color: theme.palette.text.primary }} />
            ) : (
              <LockIcon sx={{ fontSize: 30, color: theme.palette.text.primary }} />
            )}
          </Box>

          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            gutterBottom
            sx={{ 
              color: theme.palette.text.primary, 
              fontFamily: 'Kalnia, serif',
            }}
          >
            Kane Justine Cometa
          </Typography>

          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            gutterBottom
            sx={{ 
              maxWidth: 500, 
              px: { xs: 2, sm: 0 },
              color: theme.palette.text.secondary,
            }}
          >
            UI Designer | Software Developer | Data Scientist
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                fontWeight: 'bold',
                borderColor: theme.palette.text.primary,
                borderWidth: 2,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#E7694B',
                  backgroundColor: '#E7694B',
                  color: '#fff',
                },
              }}
              onClick={handlePortfolioClick}
            >
              View Portfolio
            </Button>

            <Button
              variant="outlined"
              size="large"
              component="a"
              href="/cometa_kane_curriculum_vitae.pdf" // Make sure cv.pdf is in your public folder
              download
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 'bold',
                borderColor: theme.palette.text.primary,
                borderWidth: 2,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#E7694B',
                  backgroundColor: '#E7694B',
                  color: '#fff',
                },
              }}
            >
              <DownloadIcon sx={{ mr: 1 }} /> Download CV
            </Button>
          </Box>

          <Box
            sx={{
              mt: 5,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <IconButton
              size="large"
              component="a"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cometakanejustine@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': { color: '#E7694B' },
              }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              size="large"
              href="https://github.com/Deokgo"
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': { color: '#E7694B' },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="large"
              href="https://linkedin.com/in/kane-justine-cometa"
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': { color: '#E7694B' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
