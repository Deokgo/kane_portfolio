import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import practicum from '../assets/practicum.jpg'; 

export function Practicum() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: {xs: 13, md: 15},
        pb: 5,
        px: 5,
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: {xs: '90vw', md: '70vw'},
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 1px 7px #fff'
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
              backgroundColor: 'rgba(2, 0, 0, 0.6)', // ← Adjust color & transparency here
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              zIndex: 2, // On top of the color overlay
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                textAlign: 'center',
                color: '#FFF',
                px: 2,
              }}
            >
              PetroEnergy Resources Corporation
            </Typography>
          </Box>
        </Box>


        <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: '#fff',
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
                color: '#fff',
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
                color: '#fff',
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
                color: '#fff',
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
                color: '#fff',
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
                color: '#fff',
              }}
            >
              I completed a total of 379 hours during the practicum. This includes 96 hours for project setup and 
              data familiarization, providing foundational knowledge for the student to gain a deep understanding of the project 
              context and preparation for the technical work ahead. Followed by 139 hours for data modeling and system design, 
              which emphasized database preparation and system design to ensure a scalable and user-friendly system. While 144 hours 
              for the system development and implementation, performing hands-on development work such as implementing database 
              structures, building core application functionalities, and conducting testing and quality assurance to validate system 
              performance. Essentially, there is a documentation and training which involves 104 hours to ensure that all deliverables
              were properly documented and transitioned to stakeholders. However. I am currently in the development phase, 
              handling the user acceptance testing and expected to complete the practicum on July 9, 2025, fulfilling all 
              stages of the software development lifecycle.
            </Typography>
          </Box>
          
          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: '#fff',
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
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left',
                color: '#fff',
              }}
            >
              [content]
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}