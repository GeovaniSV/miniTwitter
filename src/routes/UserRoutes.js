import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/users", userController.create);
userRouter.get("/users", userController.get);
userRouter.get("/users/:id", userController.show);
userRouter.put("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.delete);

export { userRouter };
