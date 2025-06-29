import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fade from '@mui/material/Fade';

export default function Landing() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = React.useState(false);

  const handlePortfolioClick = () => {
    setFadeOut(true);
    setTimeout(() => navigate('/portfolio'), 500); // match Fade timeout
  };

  return (
    <Fade in={!fadeOut} timeout={500}>
      <Box
        sx={{
          minHeight: '100vh',
          minWidth: '100vw',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/src/assets/bg_image.jpg)', // Replace with your image path
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
            bgcolor: 'rgba(40, 48, 63, 0.8)', // dark overlay for text visibility
            zIndex: 1,
            }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <img src="/src/assets/kane_outline.png" alt="Logo" style={{ height: '10rem' }} />
                </Box>
                <Typography variant="h6" color="#e0e0e0">
                    Hi, I'm
                </Typography>
                <Typography variant="h2" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Kane Justine Cometa
                </Typography>
                <Typography variant="h6" color="#e0e0e0" gutterBottom>
                    Aspiring Front-end Developer | Data Engineer | Data Scientist
                </Typography>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        mt: 4,
                        '&:hover': {
                            borderColor: '#E7694B',
                            backgroundColor: '#E7694B', // optional: light hover effect
                        },
                    }}
                    onClick={handlePortfolioClick}
                >
                    View Portfolio
                </Button>
                <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Button size="extra-large" startIcon={<EmailIcon />} href="mailto:2021kjcometa@live.mcl.edu.ph" 
                        sx={{color: 'white', '&:hover': {
                            color: '#E7694B'},}}></Button>
                    <Button size="extra-large" startIcon={<GitHubIcon />} href="https://github.com/Deokgo" target="_blank"
                        sx={{color: 'white', '&:hover': {
                            color: '#E7694B'},}}></Button>
                    <Button size="extra-large" startIcon={<LinkedInIcon />} href="https://linkedin.com/in/kane-justine-cometa" target="_blank"
                        sx={{color: 'white', '&:hover': {
                            color: '#E7694B'},}}></Button>
                </Box>
            </Box>  
        </Box>
      </Box>
    </Fade>
  );
}
