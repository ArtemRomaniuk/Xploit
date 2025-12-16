import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import {
  loginUser,
  registerUser,
  getXp,
  getCart,
  addCartItem,
  changeCartItemCount,
  getQuests,
  claimQuest,
  getMe,
  placeOrder,
} from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// CRUDs
userRouter.use("/me", authMiddleware);

userRouter.get("/me", getMe);

userRouter.get("/me/xp", getXp);

userRouter.get("/me/cart", getCart);
userRouter.post("/me/cart", addCartItem);
userRouter.patch("/me/cart/:id/count", changeCartItemCount);

userRouter.get("/me/quests", getQuests);
userRouter.delete("/me/quests/:id", claimQuest);

userRouter.post("/me/placeorder", placeOrder);

export default userRouter;
