// src/pages/Curriculum.tsx
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

// import both versions of your resume
import resumePt from '../assets/curriculum/resume_nilton_ptbr.pdf';
import resumeEn from '../assets/curriculum/resume_nilton_enus.pdf';

const Curriculum: FC = () => {
  const { i18n } = useTranslation();

  // if the language starts with "pt", use the Portuguese PDF; otherwise English
  const pdfSrc = i18n.language.startsWith('pt') ? resumePt : resumeEn;

  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="iframe"
        key={pdfSrc}        // ensure iframe reloads when pdfSrc changes
        src={pdfSrc}
        sx={{
          flex: 1,
          width: '100%',
          border: 'none',
          minHeight: 0,
        }}
      />
    </Box>
  );
};

export default Curriculum;
