import { Router } from "express";
import {
  getAllCatalogItems,
  getCatalogItem,
  getCatalogPage,
  getItemsCount,
} from "../controllers/catalogControllers.js";

const catalogRouter = Router();

catalogRouter.get("/page", getCatalogPage);
catalogRouter.get("/count", getItemsCount);
catalogRouter.get("/:id", getCatalogItem);
catalogRouter.get("/", getAllCatalogItems);

export default catalogRouter;
