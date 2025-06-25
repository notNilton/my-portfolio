// src/components/Footer.tsx
import React, { FC } from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        py: 2,
        px: 3,
        textAlign: 'center',
        // borderTop: `1px solid ${theme.palette.divider}`,

      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {currentYear} Nilton Aguiar dos Santos. —{' '}
        <Link component={RouterLink} to="/" color="inherit" underline="hover">
          Home
        </Link>{' '}
        •{' '}
        <Link
          component={RouterLink}
          to="/curriculum"
          color="inherit"
          underline="hover"
        >
          Curriculum
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
