import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRouter = Router();
const userController = new UserController();

userRouter.post("/", userController.create);
userRouter.delete("/:id", userController.delete)
userRouter.get("/", userController.findAll);
userRouter.put("/:id", userController.update);
