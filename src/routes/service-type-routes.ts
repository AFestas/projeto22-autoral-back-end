import { Router } from 'express';
import { getAll} from '../controllers/service-type-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const serviceTypeRoutes = Router();

serviceTypeRoutes
    .get('/all', getAll)
    

export { serviceTypeRoutes };