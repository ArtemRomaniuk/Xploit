import { Quest } from "../models/Quest.js";

export const getAllQuests = async (req, res) => {
  const quests = await Quest.find();
  res.status(200).json(quests);
};

export const getQuest = async (req, res) => {
  const quest = await Quest.findById(req.params.id);
  res.status(200).json(quest);
};
