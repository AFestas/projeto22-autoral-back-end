import { Router } from 'express';
import { getAll } from '../controllers/request-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const requestRoutes = Router();

requestRoutes
    .get('/', getAll)

export { requestRoutes };