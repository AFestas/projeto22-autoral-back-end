import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(req: Request, res: Response) {
    try{
        return res.status(httpStatus.OK).send("Theme OK");
    } catch (error) {
        console.log(error);
    }   
}