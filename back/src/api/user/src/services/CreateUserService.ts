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

    async execute(data: CreateUserRequest) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const userCreated = await this.userRepository.create({
            name: data.name,
            email: data.email,
            password: data.password
        });

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute('USER_CREATED', {
            id: userCreated.id,
            email: userCreated.email,
        });

        return userCreated;
    }
}