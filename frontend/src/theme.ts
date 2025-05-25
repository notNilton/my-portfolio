import { createTheme } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#5c6bc0', // Azul mais suave
      light: '#7986cb',
      dark: '#3949ab',
    },
    secondary: {
      main: '#ff7043', // Laranja coral suave
      light: '#ff8a65',
      dark: '#e64a19',
    },
    background: {
      default: mode === 'light' ? '#f8f5f2' : '#1a1a1a', // Beige claro / Cinza escuro
      paper: mode === 'light' ? '#fffefc' : '#2a2a2a',   // Branco bege / Cinza médio
    },
    text: {
      primary: mode === 'light' ? '#333333' : '#e0e0e0', // Texto mais suave
      secondary: mode === 'light' ? '#555555' : '#b0b0b0',
    },
  },
  shape: {
    borderRadius: 8, // Bordas ligeiramente mais arredondadas
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'light' ? 'rgba(248, 245, 242, 0.9)' : 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          transition: 'all 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.25px',
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

export default getTheme;