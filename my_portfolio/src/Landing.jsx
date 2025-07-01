import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Slide from '@mui/material/Slide';

export default function Landing() {
  const navigate = useNavigate();
  const theme = useTheme();
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
          backgroundImage: 'url(/src/assets/poly_image.svg)',
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
            bgcolor: 'rgba(40, 48, 63, 0.5)',
            zIndex: 1,
          }}
        />
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
              src="/src/assets/profile_small.svg"
              alt="Logo"
              sx={{
                height: { xs: '7rem', sm: '9rem', md: '15rem' },
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
              <LockOpenIcon sx={{ fontSize: 30, color: '#fff' }} />
            ) : (
              <LockIcon sx={{ fontSize: 30, color: '#fff' }} />
            )}
          </Box>

          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            gutterBottom
            sx={{ color: '#fff', fontFamily: 'Kalnia, serif', }}
          >
            Kane Justine Cometa
          </Typography>

          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            color="#FFF"
            gutterBottom
            sx={{ maxWidth: 500, px: { xs: 2, sm: 0 } }}
          >
            Aspiring Front-End Developer | Data Engineer | Data Scientist
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              borderColor: '#fff',
              mt: 4,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: '#E7694B',
                backgroundColor: '#E7694B',
              },
            }}
            onClick={handlePortfolioClick}
          >
            View Portfolio
          </Button>

          <Box
            sx={{
              mt: 5,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:2021kjcometa@live.mcl.edu.ph"
              sx={{
                color: 'white',
                '&:hover': { color: '#E7694B' },
              }}
            />
            <Button
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/Deokgo"
              target="_blank"
              sx={{
                color: 'white',
                '&:hover': { color: '#E7694B' },
              }}
            />
            <Button
              size="large"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/kane-justine-cometa"
              target="_blank"
              sx={{
                color: 'white',
                '&:hover': { color: '#E7694B' },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
