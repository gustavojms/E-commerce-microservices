import {prisma} from "../database/prismaClient";
import {IOrderRepository, IOrderDTO, ICreateOrderDTO} from "./IOrderRepository";

export class PrismaOrderRepository implements IOrderRepository {  
    async create(data: ICreateOrderDTO): Promise<ICreateOrderDTO> {
        const orders = await prisma.orders.create({
            data: {
                quantity: data.quantity,
                totalPrice: data.totalPrice,
                userId: data.userId,
                productId: data.productId
            }
        });
        return orders;
    }
    
    async findById(id: string): Promise<ICreateOrderDTO | null> {
        const orders = await prisma.orders.findFirst({
            where: {
                id: id
            }
        });
        return orders;
    }

    async findAll(): Promise<ICreateOrderDTO[]> {
        const orders = await prisma.orders.findMany();
        return orders;
    }

    async update(data: IOrderDTO): Promise<IOrderDTO> {        
        const orders = await prisma.orders.update({
            where: {
                id: data.id
            },
            data: {
                quantity: data.quantity,
                totalPrice: data.totalPrice
            }
        });
        return orders;
    }

    async delete(id: string): Promise<void> {
        await prisma.orders.delete({
            where: {
                id
            }
        });
    }
  }   
