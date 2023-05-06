import { IOrderRepository } from "../repositories/IOrderRepository";

interface CreateOrderRequest {
    quantity: number;  
    totalPrice: number;
}

export class CreateOrderService {
    constructor(private orderRepository: IOrderRepository) {}

    async execute({ quantity, totalPrice }: CreateOrderRequest) {
        const order = await this.orderRepository.create({
            quantity,
            totalPrice
        });

        return order;
    }
}
