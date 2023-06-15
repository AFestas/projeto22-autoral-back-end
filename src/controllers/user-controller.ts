import { Request, Response } from 'express';
import userService from '../services/user-services.js';
import httpStatus from 'http-status';

export async function getAllUsers(req: Request, res: Response) {
  try{
      const AllUsers =  await userService.getAllUser();
      return res.status(httpStatus.OK).send(AllUsers);
  } catch (error) {
      console.log(error);
  }   
}

export async function usersPost(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    await userService.createUser( {email, password} );
    return res.status(httpStatus.CREATED).send('User created successfully');

  } catch (error) {      
    return res.status(httpStatus.BAD_REQUEST).send(error.meta);
  }
}