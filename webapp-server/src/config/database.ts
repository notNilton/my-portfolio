import Database from 'better-sqlite3';

export const database = new Database('db/database.db');

// Inicialização do banco de dados
database.exec(`
  CREATE TABLE IF NOT EXISTS user_inputs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    value REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);