import { IOrderDTO, IOrderRepository } from "../repositories/IOrderRepository";


export class DeleteOrderService {
    constructor(
        private orderRepository: IOrderRepository
    ) {}

    async execute(data: IOrderDTO["id"]): Promise<void> {
         await this.orderRepository.delete(data);
    }
}