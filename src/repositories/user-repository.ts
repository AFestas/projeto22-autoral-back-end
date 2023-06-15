import { Prisma } from '@prisma/client';
import prisma from '../config/database.js';

async function getAll() {
  return prisma.user.findMany();
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

export default {
  getAll,
  findById,
  createUser,
  findUserByEmail
};