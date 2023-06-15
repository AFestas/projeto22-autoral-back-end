import { Router } from 'express';
import { userRoutes } from './user-routes.js';
import { authenticationRoutes } from './auth-routes.js';
import { galeryRoutes } from './galery-routes.js';
import { depositionRoutes } from './deposition-routes.js';
import { requestRoutes } from './request-routes.js';
import { serviceTypeRoutes } from './service-type-routes.js';
import { themeRoutes } from './theme-routes.js';


const router = Router();

router.use('/user', userRoutes);
router.use('/auth', authenticationRoutes);
router.use('/galery', galeryRoutes);
router.use('/deposition', depositionRoutes);
router.use('/request', requestRoutes);
router.use('/service', serviceTypeRoutes);
router.use('/theme', themeRoutes);

export { router };