import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
        px: { xs: 5, sm: 10, md: 10 },
        gap: { xs: 2, sm: 3 },
      }}
    >
      {/* LEFT: Profile + Decorative Blobs */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '45%' },
          minHeight: { xs: 260, sm: 320, md: '100%' },
          height: { xs: 320, md: '100%' },
          display: { xs: 'none', md: 'flex' }, // 🔥 Hide on mobile
          alignItems: 'flex-end',
          justifyContent: 'center',
          flex: { md: '1 1 45%' },
          backgroundImage: { md: "url('/src/assets/object_blob.svg')" },
          backgroundSize: '90%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative blobs (already hidden on mobile via condition) */}
        <Box
          component="img"
          src="/src/assets/object_blob.svg"
          alt="Decorative blob"
          sx={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            transform: 'rotate(205deg)',
            opacity: 0.5,
            zIndex: 0,
            width: '40%',
            minWidth: 80,
          }}
        />
        <Box
          component="img"
          src="/src/assets/object_blob.svg"
          alt="Decorative blob"
          sx={{
            position: 'absolute',
            right: '5%',
            bottom: '15%',
            transform: 'rotate(85deg)',
            opacity: 0.4,
            zIndex: 0,
            width: '40%',
            minWidth: 60,
          }}
        />

        {/* Profile image */}
        <Box
          component="img"
          src="/src/assets/profile.png"
          alt="Profile"
          sx={{
            height: '85vh',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
            zIndex: 1,
            position: 'relative',
            borderRadius: 2,
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          }}
        />
      </Box>


      {/* RIGHT: Text Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: { xs: 'unset', md: '1 1 50%' },
          zIndex: 1,
          mt: { xs: 5, s: 10, md: 20},
        }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          sx={{
            fontFamily: 'Kalnia, serif',
            fontWeight: 'bold',
            color: '#93BBD',
            lineHeight: 1.4,
            textAlign: 'center',
          }}
        >
          Hi, I'm Kane Justine Cometa
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
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: '#93BBD',
            lineHeight: 1.5,
            textAlign: 'justify',
            px: { xs: 1, sm: 0 },
          }}
        >
          I’ve built hands-on experience through various software projects and research tasks, including web and mobile app development,
          game development, and software engineering. Alongside this, I've actively worked with data analytics and visualization,
          predictive modeling, and iterative model refinement.

          <br /><br />

          I enjoy crafting seamless digital experiences and uncovering meaningful insights from complex datasets to support
          informed decision-making.

          <br /><br />

          I’m currently seeking opportunities to refine my skills and contribute to innovative, data-driven technology solutions that create impact.
        </Typography>
      </Box>
    </Box>
  );
}
