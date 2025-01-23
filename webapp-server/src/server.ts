// server.ts
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Ajuste no caminho para a pasta build
const frontendBuildPath = path.join(__dirname, '..', 'build'); // Sobe um nível
app.use(express.static(frontendBuildPath));

// Handle client-side routing
app.get('*', (_, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});