import { IOrderRepository } from "../repositories/IOrderRepository";

interface CreateOrderRequest {
    quantity: number;  
    totalPrice: number;
    userId: string;
    productId: string;
}

export class CreateOrderService {
    constructor(private orderRepository: IOrderRepository) {}

    async execute({ quantity, totalPrice, userId, productId }: CreateOrderRequest) {
        const order = await this.orderRepository.create({
            quantity,
            totalPrice,
            userId,
            productId
        });

        return order;
    }
}
