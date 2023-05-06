import { IOrderRepository } from "../repositories/IOrderRepository";

interface UpdateOrderRequest {

    id: string;
    quantity: number;
    totalPrice: number;
}

export class UpdateOrderService {
    constructor(private orderRepository: IOrderRepository) {}

    async execute({ id, quantity, totalPrice }: UpdateOrderRequest) {
        const order = await this.orderRepository.update({
            id,
            quantity,
            totalPrice
        });

        return order;
    }
}