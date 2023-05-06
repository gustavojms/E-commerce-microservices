import { Request,Response } from "express";
import { PrismaProductRepository } from "../repositories/PrismaProductRepository";
import { CreateProductService } from "../services/CreateProductService";
import { ReadProductService } from "../services/ReadProductService";
import { UpdateProductService } from "../services/UpdateProductService";
import { DeleteProductService } from "../services/DeleteProductService";

const prismaProductRepository = new PrismaProductRepository();
const createProductService = new CreateProductService(prismaProductRepository);
const readProductService = new ReadProductService(prismaProductRepository);
const updateProductService = new UpdateProductService(prismaProductRepository);
const deleteProductService = new DeleteProductService(prismaProductRepository);

export class ProductController {
  async create(request: Request, response: Response) {
    const { body } = request;
    const result = await createProductService.execute(body);

    return response.status(201).json(result);
  }

  async findAll(request: Request, response: Response) {
    const result = await readProductService.execute();

    return response.status(302).json(result);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const result = await readProductService.executeById(id);

    return response.status(302).json(result);
  }

  async findByName(request: Request, response: Response) {
    const { name } = request.params;
    const result = readProductService.executeByName(name);

    return response.status(302).json(result);
  }

  async update(request: Request, response: Response){
    const { id } = request.params;
    const { body } = request;
    const result = await updateProductService.execute({id, ...body});

    return response.status(200).json(result);
  }

  async delete(request: Request, response: Response){
    const { id } = request.params;
    const result = await deleteProductService.execute(id);

    return response.status(200).json(result);
  }
}
