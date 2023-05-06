import { IProductRepository,IProductDTO } from "../repositories/IProductRepository"; 

export class UpdateProductService {
    constructor(
        private productRepository: IProductRepository
    ) {}

   async execute(data: IProductDTO): Promise<IProductDTO> {
        const product = await this.productRepository.update(data);
        return product;
   }
}