import { Router } from 'express';
import { getAllGalery } from '../controllers/galery-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';
//import { validateSchema } from "../middlewares/schemaValidation-middleware.js";
//import { createUserSchema } from "../schema/auth-schemas.js"

const galeryRoutes = Router();

galeryRoutes
    .all('/*', authValidation)
    .get('/', getAllGalery)
    

export { galeryRoutes };