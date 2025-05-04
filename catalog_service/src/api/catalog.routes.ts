import express, { NextFunction, Request, Response } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepositiry } from "../repository/catalog.repository";

const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepositiry())

//endpoint
router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    // try {
      // res.status(201).json({});
      const data = await catalogService.createProduct(req.body);
      res.status(201).json(data);
    // } catch (error) {
    //   next(error);
    // }
  }
);
// router.post(
//   "/products",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const data = await catalogService.createProduct(req.body);
//       return res.status(201).json(data);  // ✅ Valid
//     } catch (error) {
//       next(error);
//     }
//   }
// );

export default router;
