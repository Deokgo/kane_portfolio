import React from 'react';
import { Container, Box, Typography, Grid, Paper, Chip, useTheme, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';
import { useThemeMode } from '../ThemeContext';
import light from '../assets/poly_image_light.svg';
import dark from '../assets/poly_image_dark.svg';
import colloquium from '../assets/achievements/colloquium.jpg';
import presidents from '../assets/achievements/presidents.jpg';
import deans from '../assets/achievements/deans.jpg';
import comptia from '../assets/achievements/comptia.png';
import googlecloud from '../assets/achievements/googlecloud.jpg';
import aws from '../assets/achievements/aws.jpg';

export function Achievements() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  
  const achievements = [
    {
      id: 1,
      title: "Colloquium Presentation",
      organization: "CCIS Research Colloquium",
      year: "2025",
      description: "Our team has been selected to join this year's Research Colloquium with the theme: “Unpacking Development Challenges, Fostering Sustainable Solutions”.",
      category: "Academic",
      link: '',
      imageUrl: colloquium || (mode === 'light' ? light : dark),
    },
    {
      id: 2,
      title: "President's Lister",
      organization: "Mapùa Malayan Colleges Laguna",
      year: "2024",
      description: "I was awarded by the Office of the President for an excellent academic performance for 2 consecutive academic years (2nd year - 3rd year College)",
      category: "Award",
      link: '',
      imageUrl: presidents || (mode === 'light' ? light : dark),
    },
    {
      id: 3,
      title: "Dean's Lister",
      organization: "College of Computer and Information Science",
      year: "2024",
      description: "I was awarded by the College Dean of CCIS for an excellent academic performance for 3 consecutive academic years (1st year - 3rd Year College).",
      category: "Award",
      link: '',
      imageUrl: deans || (mode === 'light' ? light : dark),
    },
    {
      id: 4,
      title: "IT Fundamentals+ (ITF+)",
      organization: "CompTIA",
      year: "2024",
      description: "I have attained certification of knowledge and skills required to identify and explain the basics of computing, IT infrastructure, application and software, software development, database fundamentals, and security.",
      category: "Certification",
      link: 'https://www.credly.com/badges/f1637df9-b938-45cd-ad7a-676c32d8cbbc/linked_in_profile',
      imageUrl: comptia || (mode === 'light' ? light : dark),
    },
    {
      id: 5,
      title: "Cloud Skill and Completion",
      organization: "Google Cloud Skills Boost",
      year: "2023",
      description: "I have successfully earned multiple Google Cloud Skill Badges, demonstrating hands-on proficiency in cloud infrastructure, application development, and data engineering.",
      category: "Badge",
      link: 'https://www.cloudskillsboost.google/public_profiles/1ff1bb11-53a6-4ae1-b9a0-60dff384d8fa',
      imageUrl: googlecloud || (mode === 'light' ? light : dark),
    },
    {
      id: 6,
      title: "AWS Academy Cloud Foundations",
      organization: "AWS Training and Certification",
      year: "2023",
      description: "I have successfully earned the introductory course is intended for overall understanding of cloud computing concepts, independent of specific technical roles.",
      category: "Badge",
      link: 'https://www.credly.com/badges/71c69ef1-c14f-4327-9855-3f461199f21d/linked_in_profile',
      imageUrl: aws || (mode === 'light' ? light : dark),
    },

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
      <Container maxWidth="auto">
        <Grid container spacing={{ xs: 3, sm: 2 }} justifyContent="center">
          {achievements.map((achievement) => (
            <Grid key={achievement.id} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  maxWidth: 350,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
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
                {/* Achievement image/banner */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={achievement.imageUrl}
                    alt={`${achievement.title} image`}
                    sx={{
                      width: '100%',
                      height: 120,
                      objectFit: 'cover',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: mode === 'light' 
                        ? 'none' 
                        : 'rgba(0, 0, 0, 0.1)',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Achievement year banner */}
                  <Chip
                    label={achievement.year}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: '#E7694B',
                      color: '#FFF',
                      fontWeight: 'bold',
                      zIndex: 2,
                    }}
                    size="small"
                  />
                </Box>
                
                {/* Achievement content */}
                <Box sx={{ 
                  p: { xs: 2.5, sm: 3 }, 
                  display: 'flex', 
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  {/* Title and organization */}
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontFamily: 'Kalnia, serif',
                        lineHeight: 1.3,
                        textAlign: 'left',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {achievement.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      sx={{
                        color: '#E7694B',
                        fontWeight: 500,
                        textAlign: 'left',
                        fontSize: '0.95rem',
                      }}
                    >
                      {achievement.organization}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6, 
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      flexGrow: 1, 
                      mb: 2 
                    }}
                  >
                    {achievement.description}
                  </Typography>

                  {/* Technologies and Buttons - anchored at bottom */}
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    gap: 3,
                    flexDirection: 'row',
                    mt: 'auto' // This pushes the section to the bottom
                  }}>
                    <Box sx={{ mt: 'auto' }}>
                      <Chip
                        label={achievement.category}
                        variant="outlined"
                        size="small"
                        sx={{
                            fontSize: '0.8rem',
                            color: '#E7694B',
                            borderColor: '#E7694B',
                            '&:hover': {
                            backgroundColor: '#E7694B',
                            color: '#FFF'
                            }
                        }}
                      />
                    </Box>
                    
                    {/* Action Buttons */}
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 1, 
                      px: 1
                    }}>
                      {achievement.link && (
                        <Button
                          variant="outlined"
                          startIcon={<Launch />}
                          title="View Credential"
                          href={achievement.link}
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
                          view
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
