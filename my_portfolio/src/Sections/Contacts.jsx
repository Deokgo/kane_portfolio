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

  const contacts = [
    {
      icon: <EmailIcon />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=cometakanejustine@gmail.com",
      label: 'cometakanejustine@gmail.com'
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/Deokgo",
      label: 'github.com/Deokgo'
    },
    {
      icon: <LinkedInIcon />,
      link: "https://linkedin.com/in/kane-justine-cometa",
      label: 'linkedin.com/in/kane-justine-cometa'
    },
  ];

  return (
    <Container maxWidth="lg">
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
            width: 'auto',
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'rgba(255, 255, 255, 0.03)',
            border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
            borderRadius: 5,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: mode === 'light' 
                ? 'rgba(231, 105, 75, 0.05)' 
                : 'rgba(255, 255, 255, 0.05)',
              borderColor: '#E7694B',
              transform: 'translateY(-2px)',
              boxShadow: mode === 'light' 
                ? '0 4px 12px rgba(231, 105, 75, 0.2)' 
                : '0 4px 12px rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <Box sx={{ p: { xs: 3, sm: 3 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
            <Box 
              component="form" 
              ref={form} 
              onSubmit={handleSubmit} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2,
                height: '100%',
                p: { xs: 0, md: 2 }
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  fontFamily: 'Kalnia, serif',
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                Leave a Message
              </Typography>
              
              <TextField 
                name="name"
                label="Name" 
                variant="outlined" 
                required 
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                      borderWidth: '2px',
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
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                      borderWidth: '2px',
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
                rows={5} 
                required 
                fullWidth
                value={formData.message}
                onChange={handleChange}
                sx={{ 
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: theme.palette.text.secondary,
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E7694B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E7694B',
                      borderWidth: '2px',
                    },
                    '& textarea': {
                      color: theme.palette.text.primary,
                    },
                  },
                }}
              />
              <Button 
                type="submit"
                variant="contained" 
                size="large"
                disabled={loading || cooldownActive}
                sx={{
                  backgroundColor: cooldownActive ? 'gray' : '#E7694B',
                  color: '#FFF',
                  fontWeight: 'bold',
                  mt: 1,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: mode === 'light' ? '0 4px 12px rgba(231, 105, 75, 0.3)' : 'none',
                  '&:hover': {
                    backgroundColor: cooldownActive ? 'gray' : '#D15538',
                  },
                  '&:disabled': {
                    color: '#FFF',
                    backgroundColor: theme.palette.action.disabledBackground,
                  },
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.primary,
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                {cooldownActive ? `Please wait for ${Math.ceil(cooldownTime / 60)} minute/s before sending another email` : ''}
              </Typography>
            </Box>
          
            <Box 
              sx={{ 
                display: 'block',
                width: {xs: '90%', sm: '1px'}, 
                height: {xs: '1px', sm: 'auto'}, 
                minHeight: {xs:'0px', sm: '300px'},
                mx: {xs: 0, sm: 4},
                my: {xs: 3, sm: 0},
                backgroundColor: theme.palette.divider 
              }} 
            />
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontFamily: 'Kalnia, serif',
                  mb: 3,
                  textAlign: 'center',
                  color: theme.palette.text.primary,
                }}
              >
                Let's Connect!
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'row', sm: 'column' },
                gap: {xs: 0, sm: 2.5},
                alignItems: 'center'
              }}>
                { contacts.map((contact, index) => (
                  <Button
                    key={index}
                    startIcon={contact.icon}
                    component="a"
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{
                      color: theme.palette.text.primary,
                      border: { xs: 'none', sm: '1px solid' },
                      borderColor: { xs: 'transparent', sm: mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary },
                      borderRadius: 3,
                      px: 2,
                      width: '100%',
                      justifyContent: { xs: 'center', sm: 'flex-start' },
                      mb: 1,
                      '&:hover': { 
                        color: '#E7694B',
                        backgroundColor: mode === 'light' ? 'rgba(231, 105, 75, 0.05)' : 'rgba(255, 255, 255, 0.05)'
                      },
                    }}
                  >
                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, fontSize: '0.75rem' }}>
                      {contact.label || contact.link}
                    </Box>  
                  </Button>
                ))}
              </Box>
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
    </Container>
  );
}
