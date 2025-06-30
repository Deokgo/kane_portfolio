import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';

export function Practicum() {
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
        <Typography variant="h4" gutterBottom>Practicum</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}><Typography>React</Typography></Grid>
          <Grid item xs={6} md={3}><Typography>JavaScript</Typography></Grid>
          <Grid item xs={6} md={3}><Typography>Material UI</Typography></Grid>
          <Grid item xs={6} md={3}><Typography>Node.js</Typography></Grid>
        </Grid>
    </Box>
  );
}