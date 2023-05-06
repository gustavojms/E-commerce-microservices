import { IUserRepository } from "../repositories/IUserRepository";

interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

export class CreateUserService {
    constructor(private userRepository: IUserRepository) {}

    async execute({ name, email, password }: CreateUserRequest) {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = await this.userRepository.create({
            name,
            email,
            password
        });

        return user;
    }
}