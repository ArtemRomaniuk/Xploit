import { create } from "zustand";

export const useUser = create((set) => ({
  isLoggedIn: true,
  username: "Leonardo di Caprio",
  xp: 70,
  wishlist: new Set(),

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
