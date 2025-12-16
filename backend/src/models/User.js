import { Schema, model } from "mongoose";
import { CatalogItemSchema } from "./CatalogItem.js";
import validator from "validator";

const CartItemSchema = new Schema({
  ...CatalogItemSchema.obj,
  count: { type: Number, default: 1, min: 0 },
});

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email",
      },
    },
    password: { type: String, required: true },
    xp: { type: Number, default: 0, min: 0 },
    quests: {
      type: [
        {
          questRef: {
            type: Schema.Types.ObjectId,
            ref: "Quest",
            required: true,
          },
          progress: { type: Number, default: 0 },
        },
      ],
      default: [],
    },
    cart: { type: [CartItemSchema], default: [] },
    wishList: {
      type: [{ type: Schema.Types.ObjectId, ref: "CatalogItem" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
