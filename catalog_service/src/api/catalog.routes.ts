import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//endpoint
router.post(
  "/product",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({});
    } catch (error) {
      next(error);
    }
  }
);

export default router;
