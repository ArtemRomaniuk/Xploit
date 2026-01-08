import { create } from "zustand";

export const useModal = create((set, get) => ({
  content: <></>,
  isOpen: false,

  open: async (newContent) => {
    get().close();
    set({ content: newContent });
    await new Promise((res) => setTimeout(res, 10));
    set({ isOpen: true });
  },
  close: () => set({ isOpen: false }),
}));
