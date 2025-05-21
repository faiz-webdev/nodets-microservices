import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.post("/order", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      // Your order creation logic goes here
      return res.status(200).json({ message: "Create order route" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.get("/order", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      // Your order creation logic goes here
      return res.status(200).json({ message: "Create order route" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.get("/order/:id", (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    try {
      // Your order creation logic goes here
      return res.status(200).json({ message: "Create order route" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  })().catch(next);
});

router.delete(
  "/order/:id",
  (req: Request, res: Response, next: NextFunction) => {
    (async () => {
      try {
        // Your order creation logic goes here
        return res.status(200).json({ message: "Create order route" });
      } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message);
      }
    })().catch(next);
  }
);

export default router;
