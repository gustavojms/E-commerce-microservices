import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

export const productRouter = Router();
const productController = new ProductController();

productRouter.post("/", productController.create);
productRouter.get("/", productController.findAll);
productRouter.get("/:id", productController.findById);
productRouter.get("/name/:name", productController.findByName);
productRouter.put("/:id", productController.update);
productRouter.delete("/:id", productController.delete);