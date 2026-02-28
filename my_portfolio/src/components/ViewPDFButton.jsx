import React from 'react';
import { Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function ViewPDFButton({ pdfUrl, sx, title }) {
  const handleViewPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={handleViewPDF}
      sx={{
        color: 'inherit',
        fontWeight: 'bold',
        borderColor: 'transparent',
        textTransform: 'none',
        width: { xs: '100%', sm: 'auto' },
        '&:hover': {
          borderColor: '#E7694B',
          backgroundColor: '#E7694B',
          color: '#fff',
        },
        ...sx,
      }}
      startIcon={<PictureAsPdfIcon />}
    >
      {title ? title : 'View CV'}
    </Button>
  );
}
