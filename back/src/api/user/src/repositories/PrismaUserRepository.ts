import { prisma } from "../database/prismaClient";
import { IUserRepository, IUserDTO, ICreateUserDTO } from "./IUserRepository";

export class PrismaUserRepository implements IUserRepository {
    async create(data: ICreateUserDTO): Promise<IUserDTO> {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
        return user;
    }

    async findByEmail(email: string): Promise<ICreateUserDTO | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return user;
    }

    async findById(id: string): Promise<ICreateUserDTO | null> {
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        });
        return user;
    }

    async update(data: IUserDTO): Promise<IUserDTO> {
        const user = await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
        return user;
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id
            }
        });
    }

    async findAll(): Promise<ICreateUserDTO[]> {
        const users = await prisma.user.findMany();
        return users;
    }
}