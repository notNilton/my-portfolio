// server.ts
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv-safe';

// Configuração de ambiente
config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Middlewares essenciais
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https://*"],
    }
  }
}));

app.use(compression());
app.use(cors({
  origin: isProduction ? process.env.CORS_ORIGIN : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de requisições por IP
  standardHeaders: true,
  legacyHeaders: false,
}));

// Configuração de arquivos estáticos
const staticAssetsPath = path.resolve(__dirname, '../build');
app.use(express.static(staticAssetsPath, {
  etag: true,
  lastModified: true,
  maxAge: isProduction ? '1y' : '0'
}));

// Client-side routing
app.get('*', (_, res) => {
  res.sendFile(path.join(staticAssetsPath, 'index.html'));
});

// Health check endpoint
app.get('/health', (_, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling
app.use((err: Error, _: express.Request, res: express.Response, __: express.NextFunction) => {
  console.error('Server Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: isProduction ? 'Something went wrong' : err.message
  });
});

// Inicialização segura
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
