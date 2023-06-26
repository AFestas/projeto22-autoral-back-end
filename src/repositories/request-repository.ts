import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function createRequest(data: Prisma.RequestsUncheckedCreateInput) {
  return prisma.requests.create({
    data,
  });
}


export default {
  createRequest
};