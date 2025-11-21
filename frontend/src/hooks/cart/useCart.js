import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  setItems: (newItems) => set({ items: newItems }),
  clearItems: () => set({ items: [] }),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((it) => it.id !== id) })),
  changeItemCount: (id, count) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, count: count } : item,
      ),
    })),
  clearCountlessItems: () =>
    set((state) => ({
      items: state.items.filter((item) => item.count !== 0),
    })),
}));
