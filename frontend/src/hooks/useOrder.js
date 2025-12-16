import { create } from "zustand";

export const useOrder = create((set) => ({
  deliveryCost: 12,
  xpDiscount: 0,
  setXpDiscountTrigger: {},

  placeOrder: async (xp) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/me/placeorder`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ xp }),
        },
      );
      if (!response.ok) throw new Error("Failed to place order");
      console.log("Order placed");
    } catch (error) {
      console.error(error.message);
    }
  },

  setDeliveryCost: (newCost) => set({ deliveryCost: newCost }),
  setXpDiscount: (newDiscount) =>
    set({ xpDiscount: newDiscount, setXpDiscountTrigger: {} }),
}));
