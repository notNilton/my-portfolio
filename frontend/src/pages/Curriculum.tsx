// src/pages/Curriculum.tsx
import React, { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import pdfFile from '../assets/curriculum/resume_nilton_ptbr.pdf';

const Curriculum: FC = () => (
  <Box
    sx={{
      flex: 1,                    // fill the <main>'s flex:1
      width: '100%',
      maxWidth: '1200px',         // cap at 1200px
      mx: 'auto',                 // center horizontally
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      component="iframe"
      src={pdfFile}
      sx={{
        flex: 1,                  // grow to take all remaining vertical space
        width: '100%',
        border: 'none',
        minHeight: 0,             // allow flex:1 to work correctly
      }}
    />
  </Box>
);

export default Curriculum;
