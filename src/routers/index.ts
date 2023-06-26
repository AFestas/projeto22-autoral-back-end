/*import { Router } from 'express';
import { userRoutes } from './../routes/user-routes';
import { authenticationRoutes } from './../routes/auth-routes';
import { galeryRoutes } from './../routes/galery-routes';
import { depositionRoutes } from './../routes/deposition-routes';
import { requestRoutes } from './../routes/request-routes';
import { serviceTypeRoutes } from './../routes/service-type-routes';
import { themeRoutes } from './../routes/theme-routes';



const router = Router();

router.use('/user', userRoutes);
router.use('/auth', authenticationRoutes);
router.use('/galery', galeryRoutes);
router.use('/deposition', depositionRoutes);
router.use('/request', requestRoutes);
router.use('/service', serviceTypeRoutes);
router.use('/theme', themeRoutes);

export { router };*/
export * from './user-routes';
export * from './auth-routes';
export * from './deposition-routes';
export * from './galery-routes';
export * from './request-routes';
export * from './service-type-routes';
export * from './theme-routes';