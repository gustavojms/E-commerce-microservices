import {prisma} from "../database/prismaClient";
import {IProductRepository, IProductDTO, ICreateProductDTO} from "./IProductRepository";

export class PrismaProductRepository implements IProductRepository {
  async create(data: ICreateProductDTO): Promise<ICreateProductDTO> {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
      }
    });
    return product;
  }

  async findByName(name: string): Promise<ICreateProductDTO | null> {
    const product = await prisma.product.findFirst({
      where: {
        name: name
      }
    });
    return product;
  }

  async findById(id: string): Promise<ICreateProductDTO | null> {
    const product = await prisma.product.findFirst({
      where: {
        id: id
      }
    });
    return product;
  }

  async findAll(): Promise<ICreateProductDTO[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  async update(data: IProductDTO): Promise<IProductDTO> {
    const product = await prisma.product.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
      }
    });
    return product;
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id
      }
    });
  }
}