import express, { NextFunction, Request, Response } from "express";
import * as service from "../services/cart.service";

const router = express.Router();

router.post("/cart", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      const response = await service.CreateCart(req.body);
      return res.status(200).json(response);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.get("/cart", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      const response = await service.GetCart(req.body);
      return res.status(200).json(response);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.patch("/cart", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      const response = await service.EditCart(req.body);
      return res.status(200).json(response);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.delete("/cart", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      const response = await service.DeleteCart(req.body);
      return res.status(200).json(response);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

export default router;
