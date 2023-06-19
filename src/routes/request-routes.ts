import { Router } from 'express';
import { postRequestForUser } from '../controllers/request-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const requestRoutes = Router();

requestRoutes
    .post('/', postRequestForUser)

export { requestRoutes };