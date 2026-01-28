import { create } from "zustand";
import { useCart } from "./cart/useCart";
import { useQuests } from "./useQuests";

export const useUser = create((set, get) => ({
  isLoggedIn: false,
  username: "",
  xp: 0,
  wishlist: new Set(),

  login: async (username, password) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      },
    );

    const { token } = await response.json();
    if (token) {
      localStorage.setItem("token", token);
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expTime = payload.exp * 1000;
      const timeout = expTime - Date.now();
      if (timeout <= 0) {
        get().logout();
      } else {
        setTimeout(() => {
          get().logout();
        }, timeout);
      }
      await get().fetchMe();
    }
  },

  logout: async () => {
    localStorage.removeItem("token");
    get().fetchMe();
  },

  register: async (email, username, password, passwordAgain) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, passwordAgain }),
      },
    );
    if (!response.ok) throw new Error("Validation failed");
    else console.log("Registration successfull");
  },

  fetchMe: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      set({ isLoggedIn: false, username: "", xp: 0 });
      await useCart.getState().fetchCart();
      await useQuests.getState().fetchQuests();
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      localStorage.removeItem("token");
      set({ isLoggedIn: false, username: "", xp: 0 });
      await useCart.getState().fetchCart();
      await useQuests.getState().fetchQuests();
      return;
    }

    const me = await res.json();
    set({
      isLoggedIn: true,
      username: me.username,
      xp: me.xp,
    });
    await useCart.getState().fetchCart();
    await useQuests.getState().fetchQuests();
  },

  setLoggedIn: (newState) => set({ isLoggedIn: newState }),
  setUsername: (newUsername) => set({ username: newUsername }),
  setXP: (newXP) => set({ xp: newXP }),
  addXP: (num) => set((state) => ({ xp: state.xp + num })),
  removeXP: (num) => set((state) => ({ xp: state.xp - num })),
  addToWishlist: (id) =>
    set((state) => {
      const newWishlist = new Set(state.wishlist);
      newWishlist.add(id);
      return { wishlist: newWishlist };
    }),
  removeFromWishlist: (id) =>
    set((state) => {
      const newWishlist = new Set(state.wishlist);
      newWishlist.delete(id);
      return { wishlist: newWishlist };
    }),
  toggleInWishlist: (id) =>
    set((state) => {
      const newWishlist = new Set(state.wishlist);
      newWishlist.has(id) ? newWishlist.delete(id) : newWishlist.add(id);
      return { wishlist: newWishlist };
    }),
}));
