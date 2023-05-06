import { kafka } from "../provider/kafka";
import { KafkaSendMessage } from "../provider/kafka/producer";
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

        const userCreated = await this.userRepository.create({
            name,
            email,
            password
        });

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute('USER_CREATED', userCreated);

        return userCreated;
    }
}