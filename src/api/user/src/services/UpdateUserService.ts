import { IUserRepository, IUserDTO } from "../repositories/IUserRepository";

export class UpdateUserService {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: IUserDTO): Promise<IUserDTO> {
        const user = await this.userRepository.update(data);
        return user;
    }
}