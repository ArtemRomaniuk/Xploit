import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  isLoading: true,
  error: null,

  fetchCart: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/me/cart`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (!response.ok) throw new Error("Failed to load cart items");
      const items = await response.json();
      set({ items: items, isLoading: false, error: null });
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },

  addItem: async (catalogItemID) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/me/cart`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ catalogItemID }),
        },
      );
      if (!response.ok) throw new Error("Failed to add item to cart");
      await get().fetchCart();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },

  changeItemCount: async (id, newItemCount) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/me/cart/${id}/count`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newItemCount }),
        },
      );
      if (!response.ok) throw new Error("Failed to change item's count");
      await get().fetchCart();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
}));
