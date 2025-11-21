import { create } from "zustand";

import imgLogitechGProX from "./testImages/logitech-gprox.png";
import imgVataK580 from "./testImages/vatak-580.png";
import imgLogitechG102 from "./testImages/logitech-g-102.png";
import imgPSVR2 from "./testImages/sony-play-station-vr-2.png";
import imgRazerBasiliskV3 from "./testImages/razer-basilisk-v-3.png";
import imgShineconVR from "./testImages/shinecon-vrscg-04-e.png";
import imgMSIDS502 from "./testImages/msids-502.png";
import imgRedDragonK551 from "./testImages/redragon-k-551-ba.png";

const testItems = [
  {
    id: 0,
    image: imgLogitechGProX,
    alt: "Logitech G Pro X headphones photo",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
  },
  {
    id: 1,
    image: imgVataK580,
    alt: "Vata K580 keyboard photo",
    name: "Vata K580",
    stars: 1,
    price: 21.3,
  },
  {
    id: 2,
    image: imgLogitechG102,
    alt: "Logitech G102 mouse photo",
    name: "Logitech G102",
    stars: 5,
    price: 33.99,
  },
  {
    id: 3,
    image: imgPSVR2,
    alt: "Sony PlayStation VR2 headset photo",
    name: "Sony PlayStation VR2",
    stars: 4,
    price: 19.99,
  },
  {
    id: 4,
    image: imgRazerBasiliskV3,
    alt: "Razer Basilisk V3 mouse photo",
    name: "Razer Basilisk V3",
    stars: 2,
    price: 19.99,
  },
  {
    id: 5,
    image: imgShineconVR,
    alt: "Shinecon VR SC-G04E headset photo",
    name: "Shinecon VR SC-G04E",
    stars: 4,
    price: 19.99,
  },
  {
    id: 6,
    image: imgMSIDS502,
    alt: "MSI DS502 headphones photo",
    name: "MSI DS502",
    stars: 4,
    price: 19.99,
  },
  {
    id: 7,
    image: imgRedDragonK551,
    alt: "Redragon K551-BA keyboard photo",
    name: "Redragon K551-BA",
    stars: 4,
    price: 19.99,
  },
  {
    id: 8,
    image: imgLogitechGProX,
    alt: "Logitech G Pro X headphones photo",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
  },
  {
    id: 9,
    image: imgLogitechGProX,
    alt: "Logitech G Pro X headphones photo",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
  },
];

export const useCatalog = create((set) => ({
  items: testItems,

  setItems: (newItems) => set({ items: newItems }),
  resetItems: () => set({ items: [] }),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((it) => it.id !== id) })),
}));
