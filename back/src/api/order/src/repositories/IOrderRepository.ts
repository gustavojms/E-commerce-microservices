export interface IOrderDTO {
    id: string;
    quantity: number;
    totalPrice: number;

}

export interface ICreateOrderDTO {
    quantity: number;
    totalPrice: number;
    userId: string;
    productId: string;
}

export interface IOrderRepository {
    create: (data: ICreateOrderDTO) => Promise<ICreateOrderDTO>
    findById: (id: string) => Promise<ICreateOrderDTO | null>;
    findAll: () => Promise<ICreateOrderDTO[]>;
    update: (data: IOrderDTO) => Promise<IOrderDTO>;
    delete: (id: string) => Promise<void>;
}