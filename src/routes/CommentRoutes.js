import { Router } from "express";
import { CommentController } from "../controllers/CommentController.js";

const commentRouter = Router();

const commentController = new CommentController();

commentRouter.post("/comments", commentController.create);
commentRouter.get("/comments/:id", commentController.show);
commentRouter.get("/comments/post/:id", commentController.get);
commentRouter.put("/comments/:id", commentController.update);
commentRouter.delete("/comments/:id", commentController.delete);

export { commentRouter };
