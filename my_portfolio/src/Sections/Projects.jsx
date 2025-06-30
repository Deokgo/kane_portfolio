import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField, Chip, IconButton } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio built with React and Material-UI showcasing projects, skills, and professional experience with smooth animations and responsive design.",
      technologies: ["React", "Material-UI", "JavaScript", "CSS"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    },
        {
      id: 2,
      name: "ESG Dash",
      description: "Integrated a repository and interactive dashboard for data analysis and visualization with multiple chart types, and export capabilities.",
      technologies: ["Python", "React", "PostgreSQL", "Github", "Figma"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    },
    {
      id: 3,
      name: "Institutional Research Repository",
      description: "Integrated user-friendly interface for managing and visualizing institutional research data with advanced search capabilities and data analytics dashboard.",
      technologies: ["Python", "React", "Postgresql", "Github"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    },
    {
      id: 4,
      name: "Procurement and Inventory Management System",
      description: "Integrated a simple user interface to facilitate company daily tasks (procurement and inventory management).",
      technologies: ["C#", "SQL", "Github", "Figma"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    },
    {
      id: 5,
      name: "Final Revelation",
      description: "A game-based software application using Unity game engine and MySQL which consists of interactive puzzle game interface which can be controlled using keyboard.",
      technologies: ["Unity", "MySQL", "Github"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    },
    {
      id: 6,
      name: "OMG.co",
      description: "Integrated user-friendly interface for handling inventory management, customer orders, and sales, reports.",
      technologies: ["ASP.NET", "C#", "MySQL", "Github"],
      githubUrl: null,
      liveUrl: null,
      imageUrl: "/src/assets/poly_image.svg",
    }
  ];

  return (  
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: 15,
        pb: 5,
        px: 5,
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
              item 
              xs={12}    // Full width on mobile
              sm={6}     // 2 columns on small screens
              md={6}     // 2 columns on medium screens
              lg={4}     // 3 columns on large screens
              xl={3}     // 4 columns on extra large screens
              key={project.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Paper
                elevation={0} // disables default MUI shadow
                sx={{
                  maxWidth: { xs: 350, sm: 350, md: 380 },
                  minHeight: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'none',              // ✅ no shadow
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 2px 10px #fff'  // Optional hover effect
                  }
                }}
              >
                {project.imageUrl && (
                  <Box
                    component="img"
                    src={project.imageUrl || '/src/assets/poly_image2.svg'}
                    alt={`${project.name} image`}
                    sx={{
                      width: '100%',
                      height: 120,
                      objectFit: 'cover',
                      borderTopLeftRadius: 10,  // ✅ Apply top-left radius
                      borderTopRightRadius: 10, // ✅ Apply top-right radius
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                )}
                <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
                  {/* Project Header - Left aligned */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start', // Left align header content
                    alignItems: 'flex-start', 
                    mb: 2,
                    textAlign: 'left' // Ensure text alignment is left
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontFamily: 'Kalnia, serif',
                        lineHeight: 1.3,
                        textAlign: 'left', // Explicitly left align title
                        color: '#fff',
                      }}
                    >
                      {project.name}
                    </Typography>
                  </Box>

                  {/* Project Description - Left aligned */}
                  <Typography 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6, 
                      fontSize: '0.95rem',
                      textAlign: 'left', // Explicitly left align description
                      color: '#93BBD2'
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies Section - Left aligned */}
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 0.5,
                      justifyContent: 'flex-start' // Left align chips
                    }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          variant="outlined"
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            height: 22,
                            color: '#E7694B',
                            borderColor: '#E7694B',
                            '&:hover': {
                              backgroundColor: '#e9ecef'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Action Buttons - Left aligned */}
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 1, 
                    justifyContent: 'flex-start' // Left align buttons
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
                          borderColor: '#6c757d',
                          color: '#6c757d',
                          fontSize: '0.7rem',
                          '&:hover': {
                            borderColor: '#495057',
                            backgroundColor: '#f8f9fa'
                          }
                        }}
                      >
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          backgroundColor: '#E7694B',
                          fontSize: '0.7rem',
                          '&:hover': {
                            backgroundColor: '#d85d42'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
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