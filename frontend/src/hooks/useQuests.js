import { create } from "zustand";
import { useUser } from "./useUser";

export const useQuests = create((set, get) => ({
  quests: [],

  fetchQuests: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      set({ quests: [] });
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/me/quests/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.ok) {
      const data = await response.json();
      set({ quests: data.quests });
    }
  },

  claimQuest: async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/me/quests/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.ok) {
      get().fetchQuests();
      useUser.getState().fetchMe();
    }
  },

  setQuests: (newQuests) => set({ quests: newQuests }),
  resetQuests: () => set({ quests: [] }),
  addQuest: (quest) => set((state) => ({ quests: [...state.quests, quest] })),
  removeQuest: (id) =>
    set((state) => ({ quests: state.quests.filter((q) => q.id !== id) })),
  deleteAllClaimed: () =>
    set((state) => ({
      quests: state.quests.filter((quest) => !quest.claimed),
    })),

  increaseProgress: (id, progressCount) =>
    set((state) => ({
      quests: state.quests.map((q) =>
        q.id === id
          ? { ...q, progress: Math.min(q.progress + progressCount, q.goal) }
          : q,
      ),
    })),

  triggerEvent: (eventType, progressCount) => {
    get().quests.forEach((q) => {
      if (q.type === eventType) get().increaseProgress(q.id, progressCount);
    });
  },
}));
