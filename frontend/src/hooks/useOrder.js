import { create } from "zustand";

export const useOrder = create((set) => ({
  deliveryCost: 12,
  xpDiscount: 0,
  setDeliveryCost: (newCost) => set({ deliveryCost: newCost }),
  setXpDiscount: (newDiscount) => set({ xpDiscount: newDiscount }),
}));
