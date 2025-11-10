import React from 'react';
import { Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function ViewPDFButton({ pdfUrl, sx }) {
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
        borderColor: 'inherit',
        textTransform: 'none',
        borderWidth: 1,
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
      View CV
    </Button>
  );
}
