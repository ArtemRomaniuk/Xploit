import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  setItems: (newItems) => set({ items: newItems }),
  clearItems: () => set({ items: [] }),
  addItem: (item) => set((state) => ({ items: state.items.push(item) })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((it) => it !== item) })),
}));
