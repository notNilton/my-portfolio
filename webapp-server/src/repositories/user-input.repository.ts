import Database from 'better-sqlite3';
import { database } from '../config/database';

export interface UserInput {
  id: number;
  name: string;
  value: number;
  created_at: string;
}

export const UserInputRepository = {
  create(input: Omit<UserInput, 'id' | 'created_at'>) {
    const stmt = database.prepare(`
      INSERT INTO user_inputs (name, value) 
      VALUES (@name, @value)
    `);
    return stmt.run(input);
  },

  getAll() {
    return database.prepare("SELECT * FROM user_inputs").all();
  }
};