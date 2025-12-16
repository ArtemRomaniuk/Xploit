import { create } from "zustand";

export const useCatalog = create((set, get) => ({
  items: [],
  isLoading: true,
  error: null,
  currentPage: 0,
  currentSort: "top",
  currentLimit: 10,
  allItemsCount: 0,

  fetchPage: async () => {
    await get().fetchItemsCount();
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/catalog/page?page=${get().currentPage}&limit=${get().currentLimit}&sort=${get().currentSort}`,
      );
      if (!response.ok) throw new Error("Failed to load catalog items");
      const catalogItems = await response.json();
      set({ items: catalogItems, isLoading: false, error: null });
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },

  fetchItemsCount: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/catalog/count`,
      );
      if (!response.ok) throw new Error("Failed to load catalog items count");
      const { count } = await response.json();
      set({ allItemsCount: count, isLoading: false, error: null });
    } catch (e) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },

  nextPage: () =>
    set((s) => ({
      currentPage:
        s.allItemsCount - (s.currentPage + 1) * s.currentLimit >= 1
          ? s.currentPage + 1
          : s.currentPage,
    })),
  prevPage: () =>
    set((s) => ({ currentPage: s.currentPage <= 0 ? 0 : s.currentPage - 1 })),

  setSort: (sort) => set({ currentSort: sort }),

  setLimit: (newLimit) => set({ currentLimit: newLimit, currentPage: 0 }),
}));
