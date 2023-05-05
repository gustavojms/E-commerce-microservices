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
    create: (data: ICreateUserDTO) => Promise<ICreateUserDTO>
    findByEmail: (email: string) => Promise<ICreateUserDTO | null>;
    findById: (id: string) => Promise<ICreateUserDTO | null>;
    update: (data: IUserDTO) => Promise<ICreateUserDTO>;
    delete: (id: string) => Promise<void>;
}