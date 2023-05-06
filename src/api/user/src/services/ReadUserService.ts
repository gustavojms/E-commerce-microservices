import { IUserRepository } from "../repositories/IUserRepository";

export class ReadUserService {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute() {       
        const user = await this.userRepository.findAll();
        return user;
    }
}