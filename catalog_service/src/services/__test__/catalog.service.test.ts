import { mock } from "node:test";
import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { MockCatalogRepository } from "../../repository/mockCatalog.repository";
import { CatalogService } from "../catalog.service";
import { faker } from "@faker-js/faker";
import { Product } from "../../models/product.model";

const mockProduct = (rest: any) => {
  const requestBody = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 1, max: 100 }),
    ...rest,
  };
  return requestBody;
};

describe("catalogService", () => {
  let repository: ICatalogRepository;

  beforeEach(() => {
    repository = new MockCatalogRepository();
  });

  afterEach(() => {
    repository = {} as MockCatalogRepository;
  });

  describe("createProduct", () => {
    test("should create a product", async () => {
      const service = new CatalogService(repository);
      const requestBody = mockProduct({
        price: +faker.commerce.price(),
      });
      const result = await service.createProduct(requestBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      });
    });

    test("should throw error with unable to create product", async () => {
      const service = new CatalogService(repository);
      const requestBody = mockProduct({
        price: +faker.commerce.price(),
      });

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() => Promise.resolve({} as Product));

      await expect(service.createProduct(requestBody)).rejects.toThrow(
        "unable to create product"
      );
    });

    test("should throw error with product already exist", async () => {
      const service = new CatalogService(repository);
      const requestBody = mockProduct({
        price: +faker.commerce.price(),
      });

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() =>
          Promise.reject(new Error("product already exist"))
        );

      await expect(service.createProduct(requestBody)).rejects.toThrow(
        "product already exist"
      );
    });
  });

  describe("updateProduct", () => {
    test("should update product", async () => {
      const service = new CatalogService(repository);
      const requestBody = mockProduct({
        price: +faker.commerce.price(),
        id: faker.number.int({ min: 10, max: 1000 }),
      });
      const result = await service.updateProduct(requestBody);
      expect(result).toMatchObject(requestBody);
    });
  });
});
