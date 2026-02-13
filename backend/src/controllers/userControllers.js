import { User } from "../models/User.js";
import { CatalogItem } from "../models/CatalogItem.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const registerUser = async (req, res) => {
  const { email, username, password, passwordAgain } = req.body;
  if (password !== passwordAgain)
    return res.status(422).json({ message: "passwords doesn't match" });
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPass });
    newUser.quests.push(
      { questRef: "694069d15b87b33aa9a34dbc", progress: 0 },
      { questRef: "69406a0f5b87b33aa9a34dc6", progress: 0 },
      { questRef: "694069d15b87b33aa9a34dbd", progress: 0 },
    );
    newUser.xp = 20;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.error(e.message);
    res.status(422).json({ message: e.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser || !(await bcrypt.compare(password, foundUser.password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.status(200).json({ token });
  } catch (e) {
    console.error(e.message);
    res.status(422).json({ message: e.message });
  }
};

// ### CRUDs ###
// ME
export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ username: user.username, xp: user.xp });
};

// XP
export const getXp = async (req, res) => {
  const xp = (await User.findById(req.user.id)).xp;
  res.status(200).json({ xp });
};

// Cart
export const getCart = async (req, res) => {
  const cart = (await User.findById(req.user.id)).cart;
  res.status(200).json(cart);
};

export const addCartItem = async (req, res) => {
  const { catalogItemID } = req.body;
  const catalogItem = await CatalogItem.findById(catalogItemID);
  const user = await User.findById(req.user.id);
  user.cart.push({
    ...catalogItem.toObject(),
    count: 1,
  });
  await user.save();
  res.status(200).json({ ...catalogItem.toObject(), count: 1 });
};

export const changeCartItemCount = async (req, res) => {
  const { id } = req.params;
  const { newItemCount } = req.body;
  const user = await User.findById(req.user.id);
  const item = user.cart.find((i) => i._id.toString() === id);
  if (!item) return res.status(404).json({ message: "item not found" });
  if (newItemCount <= 0) {
    user.cart.pull(id);
    await user.save();
    res.status(200).json({ message: "item deleted from cart" });
  } else {
    item.count = newItemCount;
    await user.save();
    res.status(200).json(item);
  }
};

// Quests
export const getQuests = async (req, res) => {
  const user = await User.findById(req.user.id).populate("quests.questRef");
  res.status(200).json({ quests: user.quests });
};

export const claimQuest = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user.id).populate("quests.questRef");
  const quest = user.quests.find((i) => i.questRef._id.toString() === id);
  if (!quest) return res.status(404).json({ message: "quest not found" });
  if (quest.progress < quest.questRef.goal)
    return res.status(403).json({ message: "quest doesn't completed" });

  user.xp += quest.questRef.reward;
  user.quests.pull({ questRef: new Types.ObjectId(id) });
  user.save();
  res.status(200).json({ quest });
};

// Place order
export const placeOrder = async (req, res) => {
  const { xp } = req.body;
  const user = await User.findById(req.user.id);
  user.xp -= xp;
  user.cart = [];
  const useXPQuest = user.quests.find(
    (q) => q.questRef.toString() === "694069d15b87b33aa9a34dbc",
  );
  if (useXPQuest) useXPQuest.progress += 1;

  user.save();
  res.status(201).json({ message: "order was placed" });
};
