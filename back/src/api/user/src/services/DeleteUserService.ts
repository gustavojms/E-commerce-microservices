import { IUserRepository, IUserDTO } from "../repositories/IUserRepository";

export class DeleteUserService {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: IUserDTO["id"]): Promise<void> {
        await this.userRepository.delete(data);
    }
}