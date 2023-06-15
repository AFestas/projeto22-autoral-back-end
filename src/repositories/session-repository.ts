import { Prisma } from '@prisma/client';
import prisma from '../config/database.js';


async function findSessionByToken(token: string) {
  return await prisma.session.findFirst({
    where: {
      token: token,
    },
  });  
}

async function createSession( data: Prisma.SessionUncheckedCreateInput ) {
  await prisma.session.create({
    data,
  });
}

export default {
  findSessionByToken,
  createSession
};