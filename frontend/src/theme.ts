// src/theme.ts
import { createTheme } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#6B5B95',
        light: '#8777A9',
        dark: '#4F3E73',
      },
      secondary: {
        main: '#FF6F61',
        light: '#FF8A75',
        dark: '#CC574F',
      },
      background: {
        default: mode === 'light' ? '#F2E8DC' : '#1C1A19',
        paper: mode === 'light' ? '#FFF8F2' : '#2A2827',
      },
      text: {
        primary: mode === 'light' ? '#2E2B2A' : '#E3E0DF',
        secondary: mode === 'light' ? '#4A4846' : '#B5B3B1',
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "'Sora', 'Inter', sans-serif",
      h1: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: '3rem',
        letterSpacing: '-1px',
      },
      h2: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: 600,
        fontSize: '2.25rem',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: mode === 'light'
              ? 'linear-gradient(135deg, #F2E8DC 0%, #FFF8F2 100%)'
              : 'linear-gradient(135deg, #1C1A19 0%, #2A2827 100%)',
            backgroundAttachment: 'fixed',
            fontSmooth: 'antialiased',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(12px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        },
      },
    },
  });

export default getTheme;
