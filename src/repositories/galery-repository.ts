import prisma from '../config/database.js';

async function getAll() {
  return prisma.gallery.findMany();
}

export default {
  getAll
};