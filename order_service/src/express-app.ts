import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import orderRoutes from "./routes/order.routes";
import cartRoutes from "./routes/cart.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(orderRoutes);
app.use(cartRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Hello from Order Service" });
  next();
});

export default app;
