import request from "supertest";
import express from "express";
import { faker } from "@faker-js/faker";
import catalogRoutes from "../catalog.routes";

const app = express();
app.use(express.json());
app.use(catalogRoutes);

const mockRequest = () => {
  const requestBody = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 1, max: 100 }),
    price: faker.commerce.price(),
  };
  return requestBody;
};

describe("Catalog Routes", () => {
  describe("POST /products", () => {
    test("should create product successfully", async () => {
      const requestBody = mockRequest();
      const response = await request(app)
        .post("/products")
        .send(requestBody)
        .set("Accept", "application/json");

      console.log("response", response);

      expect(response.status).toBe(201);
    });
  });
});
