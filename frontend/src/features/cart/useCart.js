import { create } from "zustand";

import imgLogitechGProX from "./logitech-gprox.png";
import imgVataK580 from "./vatak-580.png";

const testItems = [
  {
    image: imgLogitechGProX,
    alt: "Logitech G Pro X headphones photo",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
    isWished: false,
    count: 67,
  },
  {
    image: imgVataK580,
    alt: "Vata K580 keyboard photo",
    name: "Vata K580",
    stars: 1,
    price: 21.3,
    isWished: false,
    count: 1,
  },
];

export const useCart = create((set) => ({
  items: testItems,
  setItems: (newItems) => set({ items: newItems }),
  clearItems: () => set({ items: [] }),
  addItem: (item) => set((state) => ({ items: state.items.push(item) })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((it) => it !== item) })),
}));
