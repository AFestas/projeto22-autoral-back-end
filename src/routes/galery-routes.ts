import { Router } from 'express';
import { getAllGalery } from '../controllers/galery-controller.js';

const galeryRoutes = Router();

galeryRoutes
    .get('/', getAllGalery)    

export { galeryRoutes };