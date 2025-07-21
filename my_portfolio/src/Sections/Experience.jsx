import React from 'react';
import { Box, Typography, Paper, useTheme, Chip, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { useThemeMode } from '../ThemeContext';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import petroenergy from '../assets/petroenergy_logo.svg'; 
import mmcl from '../assets/mmcl_logo.svg';

export function Experience() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const experiences = [
    {
      id: 1,
      title: "Full-stack Software Developer Intern",
      company: "PetroEnergy Resources Corporation",
      location: "Ortigas Business Center, Pasig City",
      period: "Apr - Jul 2025",
      type: "project",
      description: "Developed a full-stack ESG data management system, from data modeling to deployment. Designed user interfaces and implementingsystem architecture for seamless functionality. Prepared documentation, training materials, andconducting system handover to end-users.",
      skills: ["Data Warehousing", "Data Analysis", "Project Management", "Wireframing", "Figma", "React.js", "FastAPI", "PostgreSQL", "Python", "Scrum Agile"],
      companyLogo: petroenergy
    },
    {
      id: 2,
      title: "IFO - Student Assistant",
      company: "Mapúa Malayan Colleges Laguna",
      location: "Cabuyao, Laguna",
      period: "Apr - Jul 2024",
      type: "work",
      description: "Provided academic support required for the students in Mapúa MCL. Maintaining and managing private student information in online and physical files. Interacting with students in person to address any questions or concerns.",
      skills: ["Student Welfare", "Support Services", "Student Services", "Communication"],
      companyLogo: mmcl
    },
    {
      id: 3,
      title: "ADO - Student Assistant",
      company: "Mapúa Malayan Colleges Laguna",
      location: "Cabuyao, Laguna",
      period: "Aug - Sep 2025",
      type: "work",
      description: "Maintaining and managing private student information in online and physical files. Assisting the admissions office in processing admission forms for potential students. Interacting with students in person and via phone to address any questions or concerns.",
      skills: ["Support Services", "Student Services", "Communication", "Data Entry"],
      companyLogo: mmcl
    },
    {
      id: 4,
      title: "Bachelor of Science in Computer Science",
      company: "Mapúa Malayan Colleges Laguna",
      location: "Cabuyao, Laguna",
      period: "Aug 2021 - Oct 2025",
      type: "education",
      description: "Activities and societies: Student Council, School Events Volunteer, Academic Organization, Member of Junior Philippine Computing Society",
      skills: ["Software Engineering", "Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Web Development", "Mobile Devlopment"],
      companyLogo: mmcl
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <WorkIcon />;
      case 'education':
        return <SchoolIcon />;
      case 'project':
        return <CodeIcon />;
      default:
        return <BusinessIcon />;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'work':
        return '#E7694B';
      case 'education':
        return '#1A1818';
      case 'project':
        return '#1A1818';
      default:
        return '#FF9800';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: 8,
        ml: { xs: 0, md: 15 }, // Adjusted for smaller screens
        mr: { xs: 0, md: 15 }, // Adjusted for smaller screens
        pb: 5,
        gap: 3,
      }}
    >
        <Box sx={{ p: { xs: 'none', sm: 3 } }}>
          <Timeline position={isMobile ? "right" : "alternate"}>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineOppositeContent
                  sx={{ 
                    m: 'auto 0',
                    color: theme.palette.text.secondary,
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    display: { xs: 'none', sm: index % 2 !== 0 ? 'block' : 'block'}
                  }}
                  align={isMobile ? "right" : (index % 2 === 0 ? "right" : "left")}
                  variant="body2"
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    flexDirection: isMobile ? 'row' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                    justifyContent: 'space-between',
                  }}>
                    <Box
                      component="img"
                      src={experience.companyLogo}
                      alt="Logo"
                      sx={{
                        width: { xs: 150, sm: 200, md: 250, lg: 300 },
                        height: 'auto',
                        mb: 1.5,
                        objectFit: 'contain',
                        transition: 'width 0.3s',
                      }}
                    />
                    {experience.period}
                  </Box>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                  <TimelineConnector 
                    sx={{ 
                      bgcolor: mode === 'light' ? '#E0E0E0' : '#424242',
                      width: 2
                    }} 
                  />
                  <TimelineDot
                    sx={{
                      bgcolor: getIconColor(experience.type),
                      color: 'white',
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 8px ${getIconColor(experience.type)}40`
                    }}
                  >
                    {getIcon(experience.type)}
                  </TimelineDot>
                  <TimelineConnector 
                    sx={{ 
                      bgcolor: mode === 'light' ? '#E0E0E0' : '#424242',
                      width: 2
                    }} 
                  />
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: mode === 'light' 
                        ? 'rgba(255, 255, 255, 0.8)' 
                        : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
                      borderRadius: 2,
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
                    {/* Mobile-only period display (when TimelineOppositeContent is hidden) */}
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        mb: 1.5,
                        display: { xs: 'block', sm: 'none' }
                      }}
                    >
                      {experience.period}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontFamily: 'Kalnia, serif',
                        lineHeight: 1.3,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {experience.title}
                    </Typography>
                    
                    <Typography 
                      variant="subtitle1"
                      sx={{ 
                        color: '#E7694B',
                        fontWeight: 'medium',
                        mb: 0.5
                      }}
                    >
                      {experience.company}
                    </Typography>
                    
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.text.secondary,
                        mb: 1.5,
                        fontStyle: 'italic'
                      }}
                    >
                      {experience.location}
                    </Typography>
                    
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.text.primary,
                        textAlign: 'justify',
                        lineHeight: 1.6,
                        mb: 2
                      }}
                    >
                      {experience.description}
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1 
                    }}>
                      {experience.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}    
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
                        >
                          {skill}
                        </Chip>
                      ))}
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
    </Box>
  );
}
