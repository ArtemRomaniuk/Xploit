import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  isLoading: true,
  error: null,

  clearItems: async () => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to clear cart items");
      // set({ items: [] });
      await get().fetchItems();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
  addItem: async (item) => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) throw new Error("Failed to add item to cart");
      // set((s) => ({ items: [...s.items, item] }));
      await get().fetchItems();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
  removeItem: async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete item from cart");
      // set((state) => ({ items: state.items.filter((it) => it.id !== id) }));
      await get().fetchItems();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
  changeItemCount: async (id, count) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: count }),
      });
      if (!response.ok)
        throw new Error("Failed to change item's count in cart");
      // set((state) => ({
      //   items: state.items.map((item) =>
      //     item.id === id ? { ...item, count: count } : item,
      //   ),
      // }))
      await get().fetchItems();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
  clearCountlessItems: async () => {
    const clearedItems = get().items.filter((item) => item.count !== 0);
    try {
      const response = await fetch(`http://localhost:3000/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clearedItems),
      });
      if (!response.ok)
        throw new Error("Failed to clear countless items in cart");
      // set({ items: clearedItems });
      await get().fetchItems();
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
  fetchItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("http://localhost:3000/cart");
      if (!response.ok) throw new Error("Failed to load cart items");
      const items = await response.json();
      set({ items: items, isLoading: false, error: null });
    } catch (error) {
      console.error(error.message);
      set({ isLoading: false, error: error.message });
    }
  },
}));
