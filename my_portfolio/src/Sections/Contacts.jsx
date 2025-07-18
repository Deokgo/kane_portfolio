import React, { useState, useRef } from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, TextField, useTheme, IconButton, Alert, Snackbar } from '@mui/material';
import { useThemeMode } from '../ThemeContext';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';

export function Contact() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const form = useRef();
  
  const [formData, setFormData] = useState({
    time: '',
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);

  // Cooldown duration in seconds (5 minutes = 300 seconds)
  const COOLDOWN_DURATION = 300;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if cooldown is active
    if (cooldownActive) {
      setAlert({
        open: true,
        message: `Please wait ${Math.ceil(cooldownTime / 60)} minutes before sending another email.`,
        severity: 'warning'
      });
      return;
    }
    
    setLoading(true);

    // EmailJS configuration - Using environment variables for better security
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Check if environment variables are loaded
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Public Key:', publicKey ? 'Loaded' : 'Not loaded');

    // Check if all required variables are present
    if (!serviceID || !templateID || !publicKey) {
      console.error('Missing EmailJS configuration');
      setAlert({
        open: true,
        message: 'Email configuration is missing. Please check environment variables.',
        severity: 'error'
      });
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      contact_time: new Date().toLocaleString(), // Current date and time
      to_name: 'Kane Justine Cometa', // Your name
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlert({
          open: true,
          message: 'Email sent successfully! Thank you for your message.',
          severity: 'success'
        });
        setFormData({ time: '', name: '', email: '', message: '' }); // Reset form
        
        // Start cooldown
        startCooldown();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        console.error('Error details:', {
          status: error.status,
          text: error.text,
          message: error.message
        });
        setAlert({
          open: true,
          message: `Failed to send email: ${error.text || error.message || 'Unknown error'}. Please try again or contact me directly.`,
          severity: 'error'
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  // Cooldown management functions
  const startCooldown = () => {
    setCooldownActive(true);
    setCooldownTime(COOLDOWN_DURATION);
    
    // Store cooldown end time in localStorage
    const cooldownEndTime = Date.now() + (COOLDOWN_DURATION * 1000);
    localStorage.setItem('emailCooldownEnd', cooldownEndTime.toString());
    
    // Start countdown timer
    const timer = setInterval(() => {
      setCooldownTime(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setCooldownActive(false);
          localStorage.removeItem('emailCooldownEnd');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Check for existing cooldown on component mount
  React.useEffect(() => {
    const cooldownEndTime = localStorage.getItem('emailCooldownEnd');
    if (cooldownEndTime) {
      const timeLeft = Math.max(0, parseInt(cooldownEndTime) - Date.now());
      if (timeLeft > 0) {
        setCooldownActive(true);
        setCooldownTime(Math.ceil(timeLeft / 1000));
        
        const timer = setInterval(() => {
          setCooldownTime(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setCooldownActive(false);
              localStorage.removeItem('emailCooldownEnd');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        localStorage.removeItem('emailCooldownEnd');
      }
    }
  }, []);
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: 13,
        pb: 5,
        gap: { xs: 2, sm: 3 },
      }}
    >
        <Paper
          elevation={0}
          sx={{
            width: {xs: '80vw', md: '30vw'},
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(10px)',
            boxShadow: mode === 'light' 
              ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
              : 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: mode === 'light' 
                ? '0 4px 20px rgba(231, 105, 75, 0.3)' 
                : '0 1px 7px #fff'
            }
          }}
        >
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontFamily: 'Kalnia, serif',
                  lineHeight: 1.3,
                  m: 2,
                  textAlign: 'center',
                  color: theme.palette.text.primary,
                }}
              >
                Let's Connect!
              </Typography>
              <TextField 
                name="name"
                label="Name" 
                variant="outlined" 
                required 
                value={formData.name}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                    },
                    '& input': {
                      color: theme.palette.text.primary,
                    },
                  },
                }}
              />
              <TextField 
                name="email"
                label="Email" 
                variant="outlined" 
                type="email"
                required 
                value={formData.email}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                    },
                    '& input': {
                      color: theme.palette.text.primary,
                    },
                  },
                }}
              />
              <TextField 
                name="message"
                label="Message" 
                variant="outlined" 
                multiline 
                rows={4} 
                required 
                value={formData.message}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                    },
                    '& textarea': {
                      color: theme.palette.text.primary,
                    },
                  },
                }}
              />
              <Button 
                type="submit"
                variant="outlined" 
                size="large"
                disabled={loading || cooldownActive}
                sx={{
                  color: (cooldownActive ? theme.palette.text.secondary : '#E7694B'),
                  borderColor: (cooldownActive ? theme.palette.text.secondary : '#E7694B'),
                  borderWidth: 2,
                  fontWeight: 'bold',
                  mt: 2,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    color: cooldownActive ? 'gray' : '#FFF',
                    backgroundColor: cooldownActive ? 'gray' : '#E7694B',
                    borderColor: cooldownActive ? 'gray' : '#E7694B',
                  },
                  '&:disabled': {
                    color: theme.palette.text.secondary,
                  },
                }}
              >
                Send
              </Button>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: theme.palette.text.primary,
                textAlign: 'center',
              }}
            >
              {loading ? 'Sending...' : cooldownActive ? `Please wait for ${Math.ceil(cooldownTime / 60)} minute/s before sending another email` : ''}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: theme.palette.text.primary,
                textAlign: 'center',
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                mt: 3,
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
        </Paper>
        
        {/* Alert/Snackbar for feedback */}
        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseAlert} 
            severity={alert.severity} 
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
    </Box>
  );
}
