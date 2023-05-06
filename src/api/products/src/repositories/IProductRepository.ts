export interface IProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
}

export interface IProductRepository {
  create: (data: ICreateProductDTO) => Promise<ICreateProductDTO>
  findByName: (name: string) => Promise<ICreateProductDTO | null>;
  findById: (id: string) => Promise<ICreateProductDTO | null>;
  findAll: () => Promise<ICreateProductDTO[]>;
  update: (data: IProductDTO) => Promise<IProductDTO>;
  delete: (id: string) => Promise<void>;
}