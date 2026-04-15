import express, { type NextFunction, type Application, type Request, type Response } from "express";
import cors from 'cors';
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import {userRouter } from './modules/Auth/auth.route';
import { medicineRouter } from "./modules/medicine/medicine.route";
import { OrderRouter } from "./modules/Orders/orders.route";
import { categoriesRouter } from "./modules/categories/categories.route";
import { sellerRouter } from "./modules/SellerProfile/sellerProfile.route";
import { addressRouter } from "./modules/Address/address.route";
import { cartItemRouter } from "./modules/CartItem/cartItem.route";


const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));
// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Medistore!');
});



// ------------------- Routes -------------------

app.use("/api", userRouter);
app.use("/api", categoriesRouter);
app.use("/api/seller", medicineRouter);
app.use("/api", sellerRouter);

app.use("/api/medicines", medicineRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/address", addressRouter);
app.use("/api/cart-item", cartItemRouter);


app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      hour12: false, // 24-hour format
    }),
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const localTime = new Date().toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour12: false,
  });

  return res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
    timestamp: localTime,
    suggestion: "Please check the URL or API documentation",
  });
});


export default app;
