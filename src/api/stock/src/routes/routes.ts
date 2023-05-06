import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

export const orderRouter = Router();
const orderController = new OrderController();


orderRouter.post("/", orderController.create);
orderRouter.delete("/:id", orderController.delete)
orderRouter.get("/", orderController.index);
orderRouter.put("/:id", orderController.update);
orderRouter.get("/:id", orderController.findById);