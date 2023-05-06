import { IProductRepository,IProductDTO } from "../repositories/IProductRepository";

export class ReadProductService {
    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute(){
        const product = await this.productRepository.findAll();
        return product;
    }

    async executeById(id: string){
        const product = await this.productRepository.findById(id);
        return product;
    }

    async executeByName(name: string){
        const product = await this.productRepository.findByName(name);
        return product;
    }
}