import { config } from 'dotenv-safe';
import path from 'path';

// Configurar caminhos absolutos a partir da raiz do projeto
const ROOT_DIR = process.cwd(); // Pega o diretório de execução do projeto

export const loadEnv = () => {
  config({
    path: path.resolve(ROOT_DIR, '.env'),
    example: path.resolve(ROOT_DIR, '.env.example')
  });
};