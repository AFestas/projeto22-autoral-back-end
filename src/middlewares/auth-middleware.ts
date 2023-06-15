import { Request, Response, NextFunction } from 'express';
import userRepositories from '../repositories/user-repository.js';
import chalk from 'chalk';
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import prisma from '../config/database.js';


export async function authValidation(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  
  console.log(chalk.blue(`Passed Authentication Route`));
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(httpStatus.UNAUTHORIZED).send("unauthorized authorization");
  
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(httpStatus.UNAUTHORIZED).send("unauthorized token");

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    
    if (!session) return res.status(httpStatus.UNAUTHORIZED).send("unauthorized session");

    req.userId = userId;

    return next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).send(res);
  }
}

type JWTPayload = {
  userId: number;
};

export type AuthenticatedRequest = Request & JWTPayload;

