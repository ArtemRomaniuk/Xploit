import { create } from "zustand";

export const useCatalog = create((set) => ({
  items: [],
  isLoading: true,
  error: null,

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((it) => it.id !== id) })),

  fetchItems: async (count) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`http://localhost:3000/catalogItems`);
      if (!response.ok) throw new Error("Failed to load catalog items");
      const catalogItems = await response.json();
      set({ items: catalogItems, isLoading: false, error: null });
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
}));
