import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Contact() {
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
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',              // ✅ no shadow
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 2px 10px #E7694B'  // Optional hover effect
            }
          }}
        >
          <Typography variant="h4" gutterBottom>Contact</Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" variant="outlined" required sx={{ color: '#FFF'}}/>
            <TextField label="Email" variant="outlined" required sx={{ color: '#FFF'}}/>
            <TextField label="Message" variant="outlined" multiline rows={4} required sx={{ color: '#FFF'}}/>
            <Button variant="contained" color="primary">Send</Button>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button startIcon={<EmailIcon />} href="mailto:your.email@example.com">Email</Button>
            <Button startIcon={<GitHubIcon />} href="https://github.com/yourusername" target="_blank">GitHub</Button>
            <Button startIcon={<LinkedInIcon />} href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</Button>
          </Box>
        </Paper>
        
    </Box>
  );
}
