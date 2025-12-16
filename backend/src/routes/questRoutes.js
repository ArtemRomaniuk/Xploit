import { Router } from "express";
import { getAllQuests, getQuest } from "../controllers/questControllers.js";

const questRouter = Router();

questRouter.get("/:id", getQuest);
questRouter.get("/", getAllQuests);

export default questRouter;
