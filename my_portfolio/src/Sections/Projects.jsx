import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';

export function Projects() {
  return (
    <Box sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Portfolio Website" secondary="A personal portfolio built with React and Material UI." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Open Source Contributions" secondary="Active contributor to several open source projects on GitHub." />
          </ListItem>
        </List>
    </Box>
  );
}