import { create } from "zustand";

export const useMobileSidebar = create((set) => ({
  isOpen: false,

  toggleIsOpen: () => set((s) => ({ isOpen: !s.isOpen })),
}));
