import { Router } from 'express';
import { singIn } from '../controllers/auth-controller.js';
import { validateSchema } from '../middlewares/schemaValidation-middleware.js';
import { signInSchema } from '../schema/auth-schemas.js';

const authenticationRoutes = Router();

authenticationRoutes
    .post('/signin', validateSchema(signInSchema), singIn);

export { authenticationRoutes };
