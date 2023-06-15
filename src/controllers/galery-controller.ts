import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllGalery(req: Request, res: Response) {
    try{
        return res.status(httpStatus.OK).send('Galery OK');
    } catch (error) {
        console.log(error);
    }   
}