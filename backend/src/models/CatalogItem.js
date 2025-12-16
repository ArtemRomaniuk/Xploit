import { Schema, model } from "mongoose";

export const CatalogItemSchema = new Schema(
  {
    image: {
      type: String,
      default: "/uploads/catalogItemsImgs/defaultCatalogImg.png",
    },
    alt: { type: String, default: "" },
    name: { type: String, required: true },
    stars: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const CatalogItem = model("CatalogItem", CatalogItemSchema);
