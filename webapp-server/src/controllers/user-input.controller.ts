import { Request, Response } from 'express';
import { UserInputRepository } from '../repositories/user-input.repository';

// Interface para tipagem do request
interface UserInputRequest {
  name: string;
  value: number;
}

// Função handler com tipagem correta
export const handleUserInput = async (
  req: Request<{}, {}, UserInputRequest>,
  res: Response
): Promise<void> => {
  try {
    const { name, value } = req.body;
    
    // Validação melhorada
    if (!name?.trim() || typeof value !== 'number' || isNaN(value)) {
      res.status(400).json({ 
        error: 'Invalid data',
        message: 'Valid name and numeric value are required' 
      });
      return;
    }

    // Operação de banco de dados
    const result = UserInputRepository.create({
      name: name.trim(),
      value: Number(value.toFixed(2))
    });

    // Resposta de sucesso
    res.status(201).json({
      id: result.lastInsertRowid,
      message: 'Data stored successfully'
    });

  } catch (error) {
    console.error('Error saving input:', error);
    const message = process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : error instanceof Error ? error.message : 'Unknown error';
    
    res.status(500).json({ 
      error: 'Server Error',
      message
    });
  }
};