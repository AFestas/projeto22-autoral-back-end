import galeryServices from '../services/galery-services.js';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllGalery(req: Request, res: Response) {
    try{
        const result = await galeryServices.getAllGalery();
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        console.log(error);
    }   
}