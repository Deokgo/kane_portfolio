import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function About() {
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        Hi, I'm a passionate software developer specializing in building modern web applications with React and Material UI.
      </Typography>
    </Paper>
  );
}

export function Projects() {
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Portfolio Website" secondary="A personal portfolio built with React and Material UI." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Open Source Contributions" secondary="Active contributor to several open source projects on GitHub." />
        </ListItem>
      </List>
    </Paper>
  );
}

export function Skills() {
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}><Typography>React</Typography></Grid>
        <Grid item xs={6} md={3}><Typography>JavaScript</Typography></Grid>
        <Grid item xs={6} md={3}><Typography>Material UI</Typography></Grid>
        <Grid item xs={6} md={3}><Typography>Node.js</Typography></Grid>
      </Grid>
    </Paper>
  );
}

export function Contact() {
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary">Send</Button>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button startIcon={<EmailIcon />} href="mailto:your.email@example.com">Email</Button>
        <Button startIcon={<GitHubIcon />} href="https://github.com/yourusername" target="_blank">GitHub</Button>
        <Button startIcon={<LinkedInIcon />} href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</Button>
      </Box>
    </Paper>
  );
}
