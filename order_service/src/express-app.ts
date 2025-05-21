import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Hello from Order Service" });
  next();
});

export default app;