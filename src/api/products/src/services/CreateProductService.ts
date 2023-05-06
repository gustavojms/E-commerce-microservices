import { IProductRepository } from "../repositories/IProductRepository";

interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export class CreateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute({ name, description, price, quantity }: CreateProductRequest) {
    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new Error("Product already exists");
    }

    const product = await this.productRepository.create({
      name,
      description,
      price,
      quantity
    });

    return product;
  }
}