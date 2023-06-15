import { Router } from "express";
import { userRoutes } from "./user-routes.js";
import { authenticationRoutes } from "./auth-routes.js";
import { galeryRoutes } from "./galery-routes.js";


const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authenticationRoutes);
router.use("/galery", galeryRoutes);

export { router };