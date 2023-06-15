import userRepositories from "../repositories/user-repository.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import jwt from 'jsonwebtoken';

async function signin( email: string, password: string) {

    const user = await userRepositories.findUserByEmail(email);
    if (!user) throw new Error("Incorrect email or password");
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Incorrect email or password");

    const userId = user.id
    //const token = uuidV4();
    //await userRepositories.createSession(token, user.id);
  

    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await userRepositories.createSession({
      token,
      userId,
    });

    return token;
  }

  export default {
    signin,
  };