import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import getTheme from './theme';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Elemento root não encontrado no DOM.');
}