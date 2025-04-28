import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any): Promise<Product> {
    const data = await this._repository.create(input);
    if (!data.id) {
      throw new Error("unable to create product");
    }
    return data;
  }

  async updateProduct(input: any): Promise<Product> {
    const data = await this._repository.update(input);
    // emit event to update record in Elastic search
    return data;
  }

  // instead of this we will get product from elastic search
  async getProducts(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset);
  
    return products;
  }

  async getProduct(id: number): Promise<Product> {
    return this._repository.findOne(id);
  }

  async deleteProduct(id: number): Promise<{}> {
    return this._repository.delete(id);
  }
}
