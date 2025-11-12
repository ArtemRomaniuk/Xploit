import { create } from "zustand";

export const useSearch = create((set) => ({
  search: "",
  setSearch: (newSearch) => set({ search: newSearch }),
  resetSearch: () => set({ search: "" }),
}));
