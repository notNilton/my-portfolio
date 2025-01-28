import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

export const createApp = () => {
  const app = express();
  
  // Configurações básicas
  app.use(express.json());
  app.use(helmet());
  app.use(compression());
  
  // CORS configurável
  const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? process.env.CORS_ORIGIN : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  };
  app.use(cors(corsOptions));

  // Rate limiting
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }));

  return app;
};