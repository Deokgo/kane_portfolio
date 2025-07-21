import React from 'react';
import { Box, Typography, Paper, Divider, useTheme, Button } from '@mui/material';
import { useThemeMode } from '../ThemeContext';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import practicum from '../assets/practicum.jpg'; 
import company from '../assets/petroenergy_logo.svg'; // Assuming you have a company image

export function Practicum() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  
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
      <Paper
        elevation={0}
        sx={{
          width: {xs: '85vw', md: '70vw'},
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          backgroundColor: mode === 'light' 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(10px)',
          boxShadow: mode === 'light' 
            ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
            : 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: mode === 'light' 
              ? '0 4px 20px rgba(231, 105, 75, 0.3)' 
              : '0 1px 7px #fff'
          }
        }}
      >
        {/* Image container with overlay title */}
        <Box sx={{ position: 'relative' }}>
          {/* Background image */}
          <Box
            component="img"
            src={practicum}
            alt='image'
            sx={{
              width: '100%',
              height: 250,
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
                ? 'rgba(255, 255, 255, 0.2)' // White overlay for light mode
                : 'rgba(0, 0, 0, 0.5)', // Dark overlay for dark mode
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              zIndex: 1, // Ensure it's above the image
            }}
          />

          {/* Text overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              zIndex: 2, // On top of the color overlay
            }}
          >
            <Box
              component="img"
              src={company}
              alt="Logo"
              sx={{
                width: { xs: 275, sm: 350, md: 400, lg: 450 },
                height: 'auto',
                mb: 1.5,
                objectFit: 'contain',
                transition: 'width 0.3s',
              }}
            />
          </Box>
        </Box>


        <Box sx={{ p: { xs: 0.75, sm: 1 } }}>
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: theme.palette.text.primary,
              }}
            >
              <BusinessIcon sx={{fontSize: '1.2rem'}}></BusinessIcon> Company Overview
            </Typography>
            <Divider sx={{ 
              borderColor: '#E7694B', 
              borderBottomWidth: 3, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                textAlign: 'justify',
                textIndent: '2rem',
                color: theme.palette.text.primary,
              }}
            >
              PetroEnergy Resources Corporation (PERC), a renewable energy firm located in Ortigas Business Center, Pasig City. The company is 
              established in 1994 under the Yuchengco Group of Companies where it operates across oil and gas, geothermal, wind, 
              and solar power. Their key assets including the Maibarara Geothermal Plant, Nabas Wind Project, and Tarlac Solar Farms. 
              Through its subsidiary, PetroGreen Energy Corporation, and global partnerships with Kyuden International and Copenhagen 
              Energy, PERC drives clean energy development in the Philippines. The company integrates ESG principles into its operations,
              focusing on sustainability, community development, and good governance.
            </Typography>
          </Box>
          
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: theme.palette.text.primary,
              }}
            >
              <ListAltIcon sx={{fontSize: '1.2rem'}}></ListAltIcon> Nature of Assignments or Tasks Given
            </Typography>
            <Divider sx={{ 
              borderColor: '#E7694B', 
              borderBottomWidth: 3, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                textAlign: 'justify',
                textIndent: '2rem',
                color: theme.palette.text.primary,
              }}
            >
              My practicum involves a full-cycle software development which starts with project orientation and setup, 
              followed by requirements gathering, and technology research. I contributed in designing data models, 
              database schemas, and the overall UI mockups. I am active in developing the respository and dashboard in both the frontend and backend of the system. 
              I also conducted testing, created documentation, and supported user training through guides and demonstrations. 
              Throughout the practicum, I demonstrated a strong technical skills, adaptability, professionalism, and a proactive 
              attitude. Which led me to gain valuable experience in real-world project development and collaboration.
            </Typography>
          </Box>
          
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: theme.palette.text.primary,
              }}
            >
              <HourglassBottomIcon sx={{fontSize: '1.2rem'}}></HourglassBottomIcon> Total Hours Rendered
            </Typography>
            <Divider sx={{ 
              borderColor: '#E7694B', 
              borderBottomWidth: 3, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                textAlign: 'justify',
                textIndent: '2rem',
                color: theme.palette.text.primary,
              }}
            >
              I completed a total of 395 hours during the practicum. This includes 72 hours for project setup 
              and data familiarization, providing foundational knowledge for the student to gain a deep understanding of 
              the project context and preparation for the technical work ahead. This is followed by 123 hours for data 
              modeling and system design, which emphasized database preparation and system design to ensure a scalable 
              and user-friendly system. While 176 hours for the system development and implementation, performing hands-on 
              development work such as implementing database structures, building core application functionalities, and 
              conducting testing and quality assurance to validate system performance. The documentation and training which 
              involves 24 hours to ensure that all deliverables were properly documented and transitioned to stakeholders. 
              The student was able to complete the practicum on July 9, 2025.
            </Typography>
          </Box>
          
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: theme.palette.text.primary,
              }}
            >
              Conclusion
            </Typography>
            <Divider sx={{ 
              borderColor: '#E7694B', 
              borderBottomWidth: 3, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                textAlign: 'justify',
                textIndent: '2rem',
                color: theme.palette.text.primary,
              }}
            >
              I gained hands-on experience in full-stack development by building the ESGDash web application using 
              React.js, FastAPI, and PostgreSQL. I learned how frontend, backend, and data layers integrate into a 
              cohesive system, while applying medallion architecture to transform fragmented Excel data into a 
              structured warehouse. In Scrum Agile development, I experienced real-world project management and iterative 
              development. I encountered enterprise-level systems such as role-based access, data validation, and 
              multi-level approvals, while also learning to communicate technical solutions to non-technical stakeholders. 
              I realized that intuitive UI, data quality, and clear documentation are essential for system adoption and 
              sustainability. Overall, the practicum bridged the gap between academic theory and enterprise practice, by 
              equipping me with the technical and professional skills needed for real-world software development.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="/cometa_practicum_narrative_report.pdf" // Make sure cv.pdf is in your public folder
            download
            sx={{
              m: 5,
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              borderColor: theme.palette.text.primary,
              borderWidth: 2,
              width: 'auto',
              '&:hover': {
                borderColor: '#E7694B',
                backgroundColor: '#E7694B',
                color: '#fff',
              },
            }}
          >
            View Full Report
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}