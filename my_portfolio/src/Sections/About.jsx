import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';
import { useThemeMode } from '../ThemeContext';
import polyImage from '../assets/poly_image3.svg';
import poly from '../assets/poly.svg';
import profile from '../assets/profile.png';
import profileSmall from '../assets/profile_small.png';

export function About() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: 'auto', md: '100vh' }, // Remove fixed minHeight on mobile
        position: 'relative',
        overflow: 'hidden',
        mt: { xs: 8, md: 0 },
        px: { xs: 0, md: 10 },
        pb: { xs: 0, md: 'unset' }, // Remove bottom padding on mobile
      }}
    >
      {/* LEFT: Profile + Decorative Blobs */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', md: 'flex' }, // Hide on mobile since we're showing image at top
          flex: { xs: 'unset', md: '1 1 20%' },
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: { xs: 'auto', md: '100%' },
          backgroundImage: {
            xs: 'none',
            md: `url(${polyImage})`
          },
          backgroundSize: '30rem',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs - only visible on md and up */}
        <Box
          component="img"
          src={poly}
          alt="Decorative blob"
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: '12%',
            right: '15%',
            transform: 'rotate(85deg)',
            opacity: 0.8,
            zIndex: 0,
            width: '8%',
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
            display: { xs: 'none', md: 'block' },
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
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: '15%',
            bottom: '3%',
            transformOrigin: 'center center',
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

        {/* Profile image - desktop */}
        <Box
          component="img"
          src={profile}
          alt="Profile"
          sx={{
            display: { xs: 'none', md: 'block' },
            height: 'auto',
            maxHeight: '85vh', 
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
            zIndex: 1,
            position: 'relative',
            borderRadius: 2,
            mt: 'auto', // Pushes to the bottom
          }}
        />
      </Box>


      {/* RIGHT: Text Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: { xs: 'unset', md: '1 1 50%' },
          px: { xs: 3, md: 5 }, // Reduce padding on mobile
          pb: { xs: 3, md: 5 }, // Reduce padding on mobile
          zIndex: 1,
          mt: { xs: 2, md: 20 }, // Reduce top margin on mobile
        }}
      >
        {/* Mobile profile image */}
        <Box
          component="img"
          src={profileSmall}
          alt="Profile"
          sx={{
            display: { xs: 'block', md: 'none' },
            height: 'auto',
            maxHeight: '20vh', // Reduce height on mobile
            maxWidth: '70%', // Limit width
            objectFit: 'contain',
            zIndex: 1,
            borderRadius: 2,
            mx: 'auto', // Center horizontally
            mb: 2, // Add some space below
          }}
        />
        <Typography
          sx={{
            fontFamily: 'Kalnia, serif',
            color: theme.palette.text.primary,
            lineHeight: 1,
            textAlign: 'center',
            fontSize: {xs: '1rem', md: '1.5rem'}
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
            fontSize: { xs: '2.5rem', md: '2.75rem' },
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
            color: mode === 'light' ? '#666' : '#93BBD',
            mb: { xs: 2, md: 4 }, // Reduce bottom margin on mobile
            textAlign: 'center',
          }}
        >
          — a 4th-year Computer Science student
        </Typography>
        <Paper
          elevation={0} // disables default MUI shadow
          sx={{
            p: {xs: 2, sm: 2.5, md: 3}, 
            minHeight: 'auto',
            mb: { xs: 0, md: 3 }, // Remove bottom margin on mobile
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'rgba(255, 255, 255, 0.03)',
            border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
            borderRadius: 5,
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
          <Typography
            variant={isMobile ? 'body1' : 'body1'}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              lineHeight: 1.8,
              textAlign: 'justify',
              px: { xs: 1, sm: 0 },
            }}
          >
            I have hands-on experience with various software projects including web and mobile app development,
            game development, and software engineering.

            <br /><br />

            I mostly work with React, Node.js, and Python, and I have a keen interest in Front-end Development and UI/UX Design.
            Most of my work has been in the field of data science, where I have applied my skills in data analysis and visualization.

            <br /><br />

            I’m currently seeking opportunities to refine my skills and contribute to innovative, data-driven technology solutions that create impact.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
