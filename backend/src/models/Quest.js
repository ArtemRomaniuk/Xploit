import { Schema, model } from "mongoose";

export const QuestSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    reward: { type: Number, required: true },
    goal: { type: Number, required: true },
    type: { type: String, enum: ["USE_XP", "GAME_HOURS"], required: true },
  },
  { timestamps: true }
);

export const Quest = model("Quest", QuestSchema);
