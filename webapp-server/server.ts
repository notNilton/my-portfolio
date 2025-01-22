// server.ts
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da build do front-end
const frontendBuildPath = path.join(__dirname, 'build'); // Altere 'build' para o nome da pasta da sua build
app.use(express.static(frontendBuildPath));

// Rota para /api/dados (opcional, se ainda quiser manter a API)
app.get('/api/dados', (req: Request, res: Response) => {
    res.json({ abc: 1234 });
});

// Todas as outras rotas redirecionam para o index.html do front-end
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});