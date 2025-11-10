import { create } from "zustand";

export const useUser = create((set) => ({
  isLoggedIn: true,
  username: "Leonardo di Caprio",
  xp: 70,
  setLoggedIn: (newState) => set({ isLoggedIn: newState }),
  setUsername: (newUsername) => set({ username: newUsername }),
  setXP: (newXP) => set({ xp: newXP }),
  addXP: (num) => set((state) => ({ xp: state.xp + num })),
  removeXP: (num) => set((state) => ({ xp: state.xp - num })),
}));
