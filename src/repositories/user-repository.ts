//import { Prisma } from '@prisma/client';
import { Prisma } from '@prisma/client';
import prisma from '../config/database.js';

async function getAll() {
  return prisma.user.findMany();
}

async function findSessionByToken(token: string) {
  return await prisma.session.findFirst({
    where: {
      token: token,
    },
  });  
}

async function findById(id: number) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}  

async function createUserTest(email: string, hashedPassword: string) {
  return prisma.user.create({
    data: { 
      email,  
      password: hashedPassword
    },
  });
}

async function createUser(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function findUserByEmail(email: string) {
	return await prisma.user.findUnique({
		where: {
			email,
		},
	});
}

async function createSession( data: Prisma.SessionUncheckedCreateInput ) {
  await prisma.session.create({
    data,
  });
}

export default {
  getAll,
  findSessionByToken,
  findById,
  createUser,
  findUserByEmail,
  createSession
};