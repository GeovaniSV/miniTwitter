import { Router } from "express";
import { PostController } from "../controllers/PostController.js";

const postRouter = Router();

const postController = new PostController();

postRouter.post("/posts", postController.create);
postRouter.get("/posts", postController.get);
postRouter.get("/posts/:id", postController.show);
postRouter.delete("/posts/:id", postController.delete);

export { postRouter };
