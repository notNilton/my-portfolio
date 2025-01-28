import { Router } from 'express';
import { handleUserInput } from '../controllers/user-input.controller';

const router = Router();

// Corrija o caminho removendo '/api' duplicado
router.post('/user-input', handleUserInput);

export default router;