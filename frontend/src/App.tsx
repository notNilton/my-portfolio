import React, { FC } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';

interface AppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const App: FC<AppProps> = ({ theme, toggleTheme }) => (
  <Box
    sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      color: 'text.primary',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          mx: 'auto',
          width: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          {/* outras rotas */}
        </Routes>
      </Box>
    </Router>
  </Box>
);

export default App;
