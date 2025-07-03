import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';
import polyImage from '../assets/poly_image3.svg';
import poly from '../assets/poly.svg';
import profile from '../assets/profile.png';
import profileSmall from '../assets/profile_small.svg';

export function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        overflow: 'hidden',
        mt: { xs: 10, md: 0 },
        px: { xs: 0, md: 10 },
        gap: { xs: 2, sm: 3 },
      }}
    >
      {/* LEFT: Profile + Decorative Blobs */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', md: 'flex' }, // 🔥 Hide on mobile
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundImage: `url(${polyImage})`,
          backgroundSize: 'full',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
        }}
      >
        {/* Decorative blobs (already hidden on mobile via condition)*/}
        <Box
          component="img"
          src={poly}
          alt="Decorative blob"
          sx={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            transform: 'rotate(85deg)',
            opacity: 0.8,
            zIndex: 0,
            width: '10%',
            minWidth: 80,
            animation: 'fadeIn 2s ease-in, float4 4s ease-in-out infinite',
              '@keyframes float4': {
                '0%': { transform: 'rotate(85deg) translateY(0px)' },
                '50%': { transform: 'rotate(85deg) translateX(-10px)' },
                '100%': { transform: 'rotate(85deg) translateY(0px)' },
              },
          }}
        />

        <Box
          component="img"
          src={poly}
          alt="Decorative blob"
          sx={{
            position: 'absolute',
            right: '10%',
            bottom: '10%',
            transform: 'rotate(255deg)',
            opacity: 0.6,
            zIndex: 3,
            width: '20%',
            minWidth: 60,
            animation: 'fadeIn 2s ease-in, float3 4s ease-in-out infinite',
            '@keyframes float3': {
              '0%': { transform: 'rotate(255deg) translateY(0px)' },
              '50%': { transform: 'rotate(255deg) translateX(-10px)' },
              '100%': { transform: 'rotate(255deg) translateY(0px)' },
            },
          }}
        />

        <Box
          component="img"
          src={poly}
          alt="Decorative blob"
          sx={{
            position: 'absolute',
            left: '15%',
            bottom: '3%',
            transformOrigin: 'center center', // You can also try 'bottom left' or 'top right' depending on the effect
            opacity: 0.4,
            zIndex: 2,
            width: '25%',
            minWidth: 60,
            animation: 'fadeIn 2s ease-in, float2 4s ease-in-out infinite',
            '@keyframes float2': {
              '0%': { transform: 'rotate(75deg) translateY(0px)' },
              '50%': { transform: 'rotate(75deg) translateX(-5px)' },
              '100%': { transform: 'rotate(75deg) translateY(0px)' },
            },
          }}
        />

        {/* Profile image */}
        <Box
          component="img"
          src={profile}
          alt="Profile"
          sx={{
            height: '85vh',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
            zIndex: 1,
            position: 'relative',
            borderRadius: 2,
          }}
        />
      </Box>


      {/* RIGHT: Text Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: { xs: 'unset', md: '1 1 50%' },
          px: 5,
          pb: 5,
          zIndex: 1,
          mt: { xs: 0, md: 20},
        }}
      >
        <Box sx={{ 
          mb: { xs: 3, sm: 4 }, 
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center'
        }}>
          <Box
            component="img"
            src={profileSmall}
            alt="Profile"
            sx={{
              py: 2,
              height: '13rem' ,
              maxWidth: '100%',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: 'Kalnia, serif',
            color: '#FFF',
            lineHeight: 1,
            textAlign: 'center',
            fontSize: {xs: '0.8rem', md: '1.5rem'}
          }}
        >
          Hi, I'm
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Kalnia, serif',
            fontWeight: 'bold',
            color: '#E7694B',
            lineHeight: 0.9,
            py: 2,
            textAlign: 'center',
            fontSize: { xs: '2.75rem', md: '3rem' },
            animation: 'fadeIn 2s ease-in, float 4s ease-in-out infinite',
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-5px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          }}
        >
          Kane Justine Cometa
        </Typography>

        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          gutterBottom
          sx={{
            fontFamily: 'Kalnia, serif',
            color: '#93BBD',
            mb: 4,
            textAlign: 'center',
          }}
        >
          — a 4th-year Computer Science student
        </Typography>
        <Paper
          elevation={0} // disables default MUI shadow
          sx={{
            p: 3, 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px #FFF',              // ✅ no shadow
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 2px 10px #E7694B'  // Optional hover effect
            }
          }}
        >
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            gutterBottom
            sx={{
              color: '#FFF',
              lineHeight: 1.5,
              textAlign: 'justify',
              px: { xs: 1, sm: 0 },
            }}
          >
            "I’ve built hands-on experience through various software projects and research tasks, including web and mobile app development,
            game development, and software engineering. Alongside this, I've actively worked with data analytics and visualization,
            predictive modeling, and iterative model refinement.

            <br /><br />

            I enjoy crafting seamless digital experiences and uncovering meaningful insights from complex datasets to support
            informed decision-making.

            <br /><br />

            I’m currently seeking opportunities to refine my skills and contribute to innovative, data-driven technology solutions that create impact."
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
