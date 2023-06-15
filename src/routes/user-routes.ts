import { Router } from 'express';
import { getAllUsers, usersPost } from '../controllers/user-controller.js';
import { validateSchema } from '../middlewares/schemaValidation-middleware.js';
import { createUserSchema } from '../schema/auth-schemas.js'

const userRoutes = Router();

userRoutes
    .post('/', validateSchema(createUserSchema), usersPost)
    .get('/', getAllUsers)
    

export { userRoutes };