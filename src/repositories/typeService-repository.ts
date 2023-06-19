import prisma from '../config/database.js';

async function getAll() {
  return prisma.serviceType.findMany();
}

export default {
  getAll
};