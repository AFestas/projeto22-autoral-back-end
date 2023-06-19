import themeService from '../services/theme-service.js';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(req: Request, res: Response) {
    try{
        const result =  await themeService.getAllTheme();
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        console.log(error);
    }   
}