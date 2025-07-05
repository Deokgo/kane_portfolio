import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField, useTheme } from '@mui/material';
import { useThemeMode } from '../ThemeContext';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Contact() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: 15,
        pb: 5,
        px: 5,
        gap: { xs: 2, sm: 3 },
      }}
    >
        <Paper
          elevation={0} // disables default MUI shadow
          sx={{
            p: 3, 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: mode === 'light' 
              ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
              : 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 2px 10px #E7694B'
            }
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Contact
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              label="Name" 
              variant="outlined" 
              required 
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
              label="Email" 
              variant="outlined" 
              required 
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
              label="Message" 
              variant="outlined" 
              multiline 
              rows={4} 
              required 
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
              variant="contained" 
              sx={{
                backgroundColor: '#E7694B',
                '&:hover': {
                  backgroundColor: '#d85d42',
                },
              }}
            >
              Send
            </Button>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button 
              startIcon={<EmailIcon />} 
              href="mailto:your.email@example.com"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: '#E7694B',
                },
              }}
            >
              Email
            </Button>
            <Button 
              startIcon={<GitHubIcon />} 
              href="https://github.com/yourusername" 
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: '#E7694B',
                },
              }}
            >
              GitHub
            </Button>
            <Button 
              startIcon={<LinkedInIcon />} 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: '#E7694B',
                },
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Paper>
        
    </Box>
  );
}
