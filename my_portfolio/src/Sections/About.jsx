import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';

export function About() {
  return (
    <Box sx={{ p: 3, mb: 4, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Box>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1">
            Hi, I'm Kane Justine A. Cometa, a 4th-year Computer Science student with a passion for Front-End Development and Data Science. Through various software projects and research tasks, I have gained practical experience in web and mobile app development, game development, and software engineering, alongside with data analytics and visualization, predictive model development and refinement. I enjoy crafting seamless digital experiences and uncovering meaningful insights from complex datasets to drive informed decision-making. I am actively seeking opportunities to refine my skills and contribute to the cutting-edge data-driven technology solutions.
        </Typography>
      </Box>
    </Box>
  );
}