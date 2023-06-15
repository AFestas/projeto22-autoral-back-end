import { Request, Response } from 'express';
import httpStatus from 'http-status';
import authService from '../services/auth-service.js';

export async function singIn(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await authService.signin( email, password );

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}
