import { Request, Response } from "express";
import { PrismaOrderRepository } from "../repositories/PrismaOrderRepository";
import { CreateOrderService } from "../services/CreateOrderService";
import { DeleteOrderService } from "../services/DeleteOrderService";


const prismaOrderRepository = new PrismaOrderRepository();
const createOrderService = new CreateOrderService(prismaOrderRepository);
const deleteOrderService = new DeleteOrderService(prismaOrderRepository);

export class OrderController {
    async create(request: Request, response: Response) {
        const { body } = request;
        const result = await createOrderService.execute(body);

        return response.json(result);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const result = await deleteOrderService.execute(id);

        return response.json(result);
    }

    async index(request: Request, response: Response) {
        const result = await prismaOrderRepository.findAll();

        return response.json(result);
    }

    async update(request: Request, response: Response) {
        const { body, params } = request;
        const result = await prismaOrderRepository.update({
            id: params.id,
            quantity: body.quantity,
            totalPrice: body.totalPrice
        });

        return response.json(result);
    }

    async findById(request: Request, response: Response) {
        const { id } = request.params;
        const result = await prismaOrderRepository.findById(id);

        return response.json(result);
    }
}