import { Request, Response } from "express";
import userService from "../services/user-services.js";
import httpStatus from "http-status";

export async function getAllGalery(req: Request, res: Response) {
    try{
        const AllUsers =  await userService.getAllUser();
        return res.status(httpStatus.OK).send(AllUsers);
    } catch (error) {
        console.log(error);
    }   
  }