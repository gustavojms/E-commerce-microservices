export interface IUserDTO {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository {
    create: (data: ICreateUserDTO) => Promise<IUserDTO>
    findByEmail: (email: string) => Promise<ICreateUserDTO | null>;
    findById: (id: string) => Promise<ICreateUserDTO | null>;
    findAll: () => Promise<ICreateUserDTO[]>;
    update: (data: IUserDTO) => Promise<IUserDTO>;
    delete: (id: string) => Promise<void>;
}