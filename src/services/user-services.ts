import { User } from "@prisma/client";
import userRepositories from "../repositories/user-repository.js";
import bcrypt from "bcrypt";

async function getAllUser() {
    return await userRepositories.getAll();
}
/*
async function createUserTest(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return await userRepositories.createUser(email,  hashedPassword);
}
*/
export async function createUser({ email, password }: CreateUserParams): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepositories.createUser({
    email,
    password: hashedPassword,
  });
}

export type CreateUserParams = Pick<User, 'email' | 'password'>;

  export default {
    getAllUser,
    createUser
  };