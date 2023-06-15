import depositionService from '../services/deposition-service.js';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(req: Request, res: Response) {
    try{   
        const AllDeposition =  await depositionService.getAllDepositions();     
        return res.status(httpStatus.OK).send(AllDeposition);
    } catch (error) {
        console.log(error);
    }   
}

export async function getSomeDeposition(req: Request, res: Response) {
    try{   
        const someDeposition =  await depositionService.getSomeDeposition();     
        return res.status(httpStatus.OK).send(someDeposition);
    } catch (error) {
        console.log(error);
    }   
}