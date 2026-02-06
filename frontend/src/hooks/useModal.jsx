import { create } from "zustand";

export const useModal = create((set, get) => ({
  content: <></>,
  isOpen: false,

  open: async (newContent) => {
    get().close();
    set({ content: newContent });
    await new Promise((res) => setTimeout(res, 1));
    set({ isOpen: true });

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  },
  close: () => {
    set({ isOpen: false });

    document.body.style.overflow = "";
    document.body.style.paddingRight = ``;
  },
}));
