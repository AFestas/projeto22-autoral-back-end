import { Router } from 'express';
import { getAll } from '../controllers/theme-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const themeRoutes = Router();

themeRoutes
    .get('/all', getAll)
    

export { themeRoutes };