//import { Prisma } from '@prisma/client';
import { Prisma } from '@prisma/client';
import prisma from '../config/database.js';

async function getAll() {
  return prisma.depositions.findMany();
}

async function getSome() {
  return prisma.depositions.findFirst();
}

export default {
  getAll,
  getSome
};