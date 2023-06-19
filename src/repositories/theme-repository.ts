import prisma from '../config/database.js';

async function getAll() {
  return prisma.theme.findMany();
}

export default {
  getAll
};