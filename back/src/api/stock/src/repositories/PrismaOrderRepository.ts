import {prisma} from "../database/prismaClient";
import {IOrderRepository, IOrderDTO, ICreateOrderDTO} from "./IOrderRepository";

export class PrismaOrderRepository implements IOrderRepository {  
    async create(data: ICreateOrderDTO): Promise<ICreateOrderDTO> {
        const order = await prisma.order.create({
            data: {
                quantity: data.quantity,
                totalPrice: data.totalPrice
            }
        });
        return order;
    }
    
    async findById(id: string): Promise<ICreateOrderDTO | null> {
        const order = await prisma.order.findFirst({
            where: {
                id: id
            }
        });
        return order;
    }

    async findAll(): Promise<ICreateOrderDTO[]> {
        const orders = await prisma.order.findMany();
        return orders;
    }

    async update(data: IOrderDTO): Promise<IOrderDTO> {        
        const order = await prisma.order.update({
            where: {
                id: data.id
            },
            data: {
                quantity: data.quantity,
                totalPrice: data.totalPrice
            }
        });
        return order;
    }

    async delete(id: string): Promise<void> {
        await prisma.order.delete({
            where: {
                id
            }
        });
    }
  }   
