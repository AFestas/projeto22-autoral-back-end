import { Router } from 'express';
import { getAll, getSomeDeposition} from '../controllers/deposition-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const depositionRoutes = Router();

depositionRoutes
    .get('/all', getAll) 
    .get('/some', getSomeDeposition)   

export { depositionRoutes };