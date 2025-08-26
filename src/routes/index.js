import { Router } from "express";
import { userRouter } from "./UserRoutes.js";
import { postRouter } from "./PostRoutes.js";
import { commentRouter } from "./CommentRoutes.js";

const rootRouter = Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", postRouter);
rootRouter.use("/", commentRouter);

export { rootRouter };
