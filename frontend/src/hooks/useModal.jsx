import { create } from "zustand";
import CartModal from "../HOC/CartModal";

export const useModal = create((set) => ({
  content: <CartModal />,
  isOpen: false,
  open: (newContent) => set({ content: newContent, isOpen: true }),
  close: () => set({ isOpen: false }),
}));
