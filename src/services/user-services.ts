import { User } from '@prisma/client';
import userRepositories from './../repositories/user-repository';
import bcrypt from 'bcrypt';

async function getAllUser() {
    return await userRepositories.getAll();
}

export async function createUser({ email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar }: CreateUserParams): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 12);
  const createUser =  userRepositories.createUser({
    email,
    password: hashedPassword,
    name,
    cpf,
    birthday: birthday + "T15:10:51.010Z",
    phone,
    street,
    city,
    complement,
    state,
    number: Number(number),
    cep,
    avatar,
  });

  if (!createUser) throw new Error('Unable to register user');

  return createUser
}

export type CreateUserParams = Pick<User, 'email' | 'password' | 'name' | 'cpf' | 'birthday' | 'phone' | 'street' | 'city' | 'complement' | 'state' | 'number' | 'cep' | 'avatar'>;

export default {
  getAllUser,
  createUser
};