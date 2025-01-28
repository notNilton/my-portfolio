import path from 'path';
import express from 'express'; // Importação faltante
import { createApp } from './config/app';
import { loadEnv } from './config/env';
import userInputRoutes from './routes/user-input.route';
import healthRoutes from './routes/health.route'; // Corrigir caminho

// Carregar variáveis de ambiente
loadEnv();

// Configurar aplicação
const app = createApp();
const port = process.env.PORT || 3000;

// Registrar rotas
app.use('/api', userInputRoutes);
app.use('/health', healthRoutes);

// // Configuração de arquivos estáticos
// const staticAssetsPath = path.resolve(__dirname, '../build');
// app.use(express.static(staticAssetsPath));

// // Client-side routing
// app.get('*', (_, res) => {
//   res.sendFile(path.join(staticAssetsPath, 'index.html'));
// });

// Inicialização do servidor
const server = app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${port}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server terminated');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);