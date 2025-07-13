import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField, Chip, IconButton, useTheme } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';
import { useThemeMode } from '../ThemeContext';
import light from '../assets/poly_image_light.svg';
import dark from '../assets/poly_image_dark.svg';
import potfolio1 from '../assets/portfolio1.svg';
import portfolio2 from '../assets/portfolio2.svg';
import portfolio3 from '../assets/portfolio3.svg';
import portfolio4 from '../assets/portfolio4.svg';
import portfolio5 from '../assets/portfolio5.svg';
import portfolio6 from '../assets/portfolio6.svg';

export function Projects() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio built with React and Material-UI showcasing projects, skills, and professional experience with smooth animations and responsive design.",
      technologies: ["React", "Figma", "Github"],
      githubUrl: null,
      liveUrl: "https://kane-cometa.vercel.app/",
      imageUrl: potfolio1 || (mode === 'light' ? light : dark),
    },
        {
      id: 2,
      name: "ESG Dash",
      description: "Integrated a repository and interactive dashboard for data analysis and visualization with multiple chart types, and export capabilities.",
      technologies: ["Python", "React", "PostgreSQL", "Github", "Figma"],
      githubUrl: "https://github.com/Deokgo/ESGDash",
      liveUrl: null,
      imageUrl: portfolio2 || (mode === 'light' ? light : dark),
    },
    {
      id: 3,
      name: "Institutional Research Repository",
      description: "Integrated user-friendly interface for managing and visualizing institutional research data with advanced search capabilities and data analytics dashboard.",
      technologies: ["Python", "React", "Postgresql", "Github"],
      githubUrl: "https://github.com/Deokgo/ResearchRepo-Web",
      liveUrl: null,
      imageUrl: portfolio3 || (mode === 'light' ? light : dark),
    },
    {
      id: 4,
      name: "Procurement and Inventory Management System",
      description: "Integrated a simple user interface to facilitate company daily tasks (procurement and inventory management).",
      technologies: ["C#", "SQL", "Github", "Figma"],
      githubUrl: "https://github.com/Deokgo/Procurement_Inventory_System",
      liveUrl: null,
      imageUrl: portfolio4 || (mode === 'light' ? light : dark),
    },
    {
      id: 5,
      name: "Final Revelation",
      description: "A game-based software application using Unity game engine and MySQL which consists of interactive puzzle game interface which can be controlled using keyboard.",
      technologies: ["Unity", "MySQL", "Github"],
      githubUrl: "https://github.com/Deokgo/Final_Revelation_Software_Application",
      liveUrl: null,
      imageUrl: portfolio5 || (mode === 'light' ? light : dark),

    },
    {
      id: 6,
      name: "OMG.co",
      description: "Integrated user-friendly interface for handling inventory management, customer orders, which includes sales report.",
      technologies: ["ASP.NET", "C#", "MySQL", "Github"],
      githubUrl: "https://github.com/Deokgo/OMG.co",
      liveUrl: null,
      imageUrl: portfolio6 || (mode === 'light' ? light : dark),
    }
  ];

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
      {/* Properly spaced container */}
      <Container 
        maxWidth='auto' 
      >
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 3 }} // Responsive spacing
          sx={{ 
            justifyContent: 'center',
            alignItems: 'stretch', // Equal height cards
          }}
        >
          {projects.map((project) => (
            <Grid  
              key={project.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  maxWidth: { xs: 350, sm: 350, md: 380 },
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
                    boxShadow: mode === 'light' 
                      ? '0 4px 20px rgba(231, 105, 75, 0.3)' 
                      : '0 1px 7px #fff',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                {project.imageUrl && (
                  <Box sx={{ position: 'relative' }}>
                      <Box
                      component="img"
                      src={project.imageUrl || polyImage}
                      alt={`${project.name} image`}
                      sx={{
                        width: '100%',
                        height: 120,
                        objectFit: 'cover',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                    {/* Color overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: mode === 'light' 
                          ? 'none' // White overlay for light mode
                          : 'rgba(0, 0, 0, 0.2)', // Dark overlay for dark mode
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        zIndex: 1, // Ensure it's above the image
                      }}
                    />
                  </Box>
                  
                )}
                
                {/* Main content container - this will grow and push bottom content down */}
                <Box sx={{ 
                  p: { xs: 2.5, sm: 3 }, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  flexGrow: 1 // This makes the content area expand
                }}>
                  {/* Project Header */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start', 
                    mb: 2,
                    textAlign: 'left'
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontFamily: 'Kalnia, serif',
                        lineHeight: 1.3,
                        textAlign: 'left',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {project.name}
                    </Typography>
                  </Box>

                  {/* Project Description - this will grow to fill available space */}
                  <Typography 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6, 
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      color: theme.palette.text.secondary,
                      flexGrow: 1, // This makes the description expand to fill space
                      mb: 2 // Add margin bottom to separate from the anchored section
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies and Buttons - anchored at bottom */}
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    gap: 3,
                    flexDirection: 'row',
                    mt: 'auto' // This pushes the section to the bottom
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 0.5,
                      justifyContent: 'flex-start'
                    }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          variant="outlined"
                          size="small"
                          sx={{
                            fontSize: '0.8rem',
                            height: 22,
                            color: '#E7694B',
                            borderColor: '#E7694B',
                            '&:hover': {
                              backgroundColor: '#E7694B',
                              color: '#FFF'
                            }
                          }}
                        />
                      ))}
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 1, 
                      px: 1
                    }}>
                      {project.githubUrl && (
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            color: theme.palette.text.primary,
                            borderColor: theme.palette.text.primary,
                            fontSize: '0.8rem',
                            '&:hover': {
                              borderColor: '#E7694B',
                              backgroundColor: mode === 'light' ? '#E7694B' : '#FFF',
                              color: mode === 'light' ? '#FFF' : '#E7694B',
                            }
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outlined"
                          startIcon={<Launch />}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            color: theme.palette.text.primary,
                            borderColor: theme.palette.text.primary,
                            fontSize: '0.8rem',
                            '&:hover': {
                              borderColor: '#E7694B',
                              backgroundColor: mode === 'light' ? '#E7694B' : '#FFF',
                              color: mode === 'light' ? '#FFF' : '#E7694B',
                            }
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}