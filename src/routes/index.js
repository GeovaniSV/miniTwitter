import { Router } from "express";
import { userRouter } from "./UserRoutes.js";
import { postRouter } from "./PostRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", postRouter);

export { rootRouter };
