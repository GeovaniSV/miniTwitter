import { Router } from "express";
import { userRouter } from "./UserRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);

export { rootRouter };
