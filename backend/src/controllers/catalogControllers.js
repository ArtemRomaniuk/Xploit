import { CatalogItem } from "../models/CatalogItem.js";

export const getAllCatalogItems = async (req, res) => {
  const catalogItems = await CatalogItem.find();
  res.status(200).json(catalogItems);
};

export const getCatalogItem = async (req, res) => {
  const catalogItem = await CatalogItem.findById(req.params.id);
  res.status(200).json(catalogItem);
};

export const getCatalogPage = async (req, res) => {
  const { page, limit, sort } = req.query;
  // sort: top, expensive, cheap
  const sortParam = sort === "top" ? "stars" : "price";
  const sortOrder = sort === "cheap" ? 1 : -1;
  const catalogItems = await CatalogItem.find()
    .sort({
      [sortParam]: sortOrder,
      _id: 1,
    })
    .skip(Number(page) * Number(limit))
    .limit(Number(limit));
  res.status(200).json(catalogItems);
};

export const getItemsCount = async (req, res) => {
  const catalogItemsCount = (await CatalogItem.find()).length;
  res.status(200).json({ count: catalogItemsCount });
};
