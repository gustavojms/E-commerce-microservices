import { IProductRepository,IProductDTO } from "../repositories/IProductRepository";

export class DeleteProductService {
    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute(data: IProductDTO["id"]): Promise<void> {
        const product = await this.productRepository.delete(data);
    }
}