import { create } from "zustand";
import { useUser } from "./useUser";

const testQuests = [
  {
    id: 0,
    name: "Use xp!",
    description: "Make 2 purchases using XP",
    reward: 69,
    goal: 2,
    progress: 0,
    claimed: false,
    type: "USE_XP",
  },
  {
    id: 1,
    name: "Dark Souls 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    reward: 10,
    goal: 1,
    progress: 0,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 2,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 30,
    goal: 12,
    progress: 7,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 3,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 8,
    goal: 3,
    progress: 2,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 4,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 67,
    goal: 67,
    progress: 33,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 5,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 69,
    goal: 69,
    progress: 2,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 6,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 100,
    goal: 100,
    progress: 100,
    claimed: false,
    type: "GAME_HOURS",
  },
  {
    id: 7,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reward: 100,
    goal: 100,
    progress: 17,
    claimed: false,
    type: "GAME_HOURS",
  },
];

export const useQuests = create((set, get) => ({
  quests: testQuests,

  setQuests: (newQuests) => set({ quests: newQuests }),
  resetQuests: () => set({ quests: [] }),
  addQuest: (quest) => set((state) => ({ quests: [...state.quests, quest] })),
  removeQuest: (id) =>
    set((state) => ({ quests: state.quests.filter((q) => q.id !== id) })),
  claimQuest: (id) =>
    set((state) => {
      const addXP = useUser.getState().addXP;
      let matchedQuest;
      state.quests.forEach((quest) => {
        if (quest.id === id) matchedQuest = quest;
      });
      addXP(matchedQuest.reward);

      return {
        quests: state.quests.map((quest) =>
          quest.id === id ? { ...quest, claimed: true } : quest,
        ),
      };
    }),
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
