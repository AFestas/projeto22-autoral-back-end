import { User } from '@prisma/client';
import themeRepositories from '../repositories/theme-repository.js';
import bcrypt from 'bcrypt';

async function getAllTheme() {
    return await themeRepositories.getAll();
}

export default {
  getAllTheme,
  
};