import React, { StrictMode, useState, useEffect, FC } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme';
import App from './App';
import './styles/index.css';

const Root: FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      setMode(saved);
    } else {
      setMode('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App theme={mode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

const container = document.getElementById('root');
if (!container) throw new Error('Elemento #root não encontrado');
const root = createRoot(container);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
