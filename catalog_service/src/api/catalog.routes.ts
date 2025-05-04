import express, { NextFunction, Request, Response } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepositiry } from "../repository/catalog.repository";
import { RequestValidator } from "./utils/requestValidators";
import { CreateProductRequest } from "../dto/product.dto";

const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepositiry());

//endpoint
router.post(
  "/products",
  (req: Request, res: Response, next: NextFunction) => {
    (async () => {
      try {
        const { errors, input } = await RequestValidator(
          CreateProductRequest,
          req.body
        );

        if (errors) {
          return res.status(400).json(errors);
        }

        const data = await catalogService.createProduct(input);
        return res.status(201).json(data);
      } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message);
      }
    })();
  }
);

export default router;
