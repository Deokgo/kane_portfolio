import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, TextField, Divider } from '@mui/material';

export function Practicum() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: 15,
        pb: 5,
        px: 5,
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={0} // disables default MUI shadow
        sx={{
          width: '70vw',
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
        <Box
          component="img"
          src={'/src/assets/poly_image.svg'}
          alt='image'
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            borderTopLeftRadius: 10,  // ✅ Apply top-left radius
            borderTopRightRadius: 10, // ✅ Apply top-right radius
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontFamily: 'Kalnia, serif',
              textAlign: 'left', // Explicitly left align title
              color: '#fff',
            }}
          >
            PetroEnergy Resources Corporation
          </Typography>
          <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              Company Overview
            </Typography>
            <Divider sx={{ 
              borderColor: '#FFF', 
              borderBottomWidth: 1, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              [content]
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              Nature of Assignments or Tasks Given
            </Typography>
            <Divider sx={{ 
              borderColor: '#FFF', 
              borderBottomWidth: 1, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              [content]
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              Total Hours Rendered
            </Typography>
            <Divider sx={{ 
              borderColor: '#FFF', 
              borderBottomWidth: 1, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              [content]
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2.5, sm: 3 }, }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
                color: '#fff',
              }}
            >
              Conclusion
            </Typography>
            <Divider sx={{ 
              borderColor: '#FFF', 
              borderBottomWidth: 1, 
              my: 1, 
              mx: 'auto', 
            }} />
            <Typography 
              variant="body" 
              sx={{ 
                fontFamily: 'Kalnia, serif',
                lineHeight: 1.3,
                textAlign: 'left', // Explicitly left align title
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