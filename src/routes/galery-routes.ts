import { Router } from 'express';
import { getAllGalery } from '../controllers/galery-controller.js';
import { authValidation } from '../middlewares/auth-middleware.js';

const galeryRoutes = Router();
//editar tudo foi criado as presas para testea atenticação
galeryRoutes
    .all('/*', authValidation)
    .get('/', getAllGalery)
    

export { galeryRoutes };