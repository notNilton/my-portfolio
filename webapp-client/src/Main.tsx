import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/Main.css';
import App from './App';  // Remove .js extension

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);