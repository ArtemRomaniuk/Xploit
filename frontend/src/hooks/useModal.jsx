import { create } from "zustand";

export const useModal = create((set) => ({
  content: <></>,
  isOpen: false,

  open: async (newContent) => {
    set({ content: newContent });
    await new Promise((res) => setTimeout(res, 10));
    set({ isOpen: true });
  },
  close: () => set({ isOpen: false }),
}));
