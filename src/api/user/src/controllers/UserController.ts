import { Request, Response } from "express";
import { PrismaUserRepository } from "../repositories/PrismaUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { ReadUserService } from "../services/ReadUserService";
import { UpdateUserService } from "../services/UpdateUserService";


const prismaUserRepository = new PrismaUserRepository();
const createUserService = new CreateUserService(prismaUserRepository);
const readUserService = new ReadUserService(prismaUserRepository);
const updateUserService = new UpdateUserService(prismaUserRepository);
const deleteUserService = new DeleteUserService(prismaUserRepository);

export class UserController {
    async create(request: Request, response: Response) {
        const { body } = request;
        const result = await createUserService.execute(body);

        return response.status(201).json(result);
    }

    async findAll(request: Request, response: Response) {       
        const result = await readUserService.execute();

        return response.status(302).json(result);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { body } = request;
        const result = await updateUserService.execute({id, ...body});

        return response.status(200).json(result);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const result = await deleteUserService.execute(id);

        return response.status(200).json(result);
    }

}