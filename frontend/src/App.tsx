import { useState, useEffect, FC } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { 
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline // ADICIONE ESTA IMPORTAÇÃO
} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import getTheme from './theme';

const App: FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = createTheme(getTheme(mode));

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setMode(savedTheme);
    } else {
      setMode('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* ESTE COMPONENTE AGORA ESTÁ DEFINIDO */}
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Navbar theme={mode} toggleTheme={toggleTheme} />
          <Box 
            component="main"
            sx={{
              flex: 1,
              p: 3,
              maxWidth: 1200,
              mx: 'auto',
              width: '100%'
            }}
          >
            <Routes>
              {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;