import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any): Promise<Product> {
    return this._repository.create(input);
  }

  async updateProduct(input: any): Promise<Product> {
    return this._repository.update(input);
  }

  async getProducts(limit: number, offset: number): Promise<Product[]> {
    return this._repository.find();
  }

  async getProduct(id: number): Promise<Product> {
    return this._repository.findOne(id);
  }

  async deleteProduct(id: number): Promise<{}> {
    return this._repository.delete(id);
  }
}
