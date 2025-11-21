import { create } from "zustand";
import { useUser } from "./useUser";

const testQuests = [
  {
    id: 0,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 100,
    progress: 100,
    status: "finished",
  },
  {
    id: 1,
    name: "Dark Souls 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    xp: 30,
    progress: 84,
    status: "inprogress",
  },
  {
    id: 2,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 10,
    progress: 12,
    status: "inprogress",
  },
  {
    id: 3,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 15,
    progress: 100,
    status: "finished",
  },
  {
    id: 4,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 50,
    progress: 69,
    status: "inprogress",
  },
  {
    id: 5,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 67,
    progress: 100,
    status: "finished",
  },
  {
    id: 6,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 20,
    progress: 40,
    status: "inprogress",
  },
];

export const useQuests = create((set) => ({
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
      addXP(matchedQuest.xp);

      return {
        quests: state.quests.map((quest) =>
          quest.id === id ? { ...quest, status: "claimed" } : quest,
        ),
      };
    }),
  deleteAllClaimed: () =>
    set((state) => ({
      quests: state.quests.filter((quest) => quest.status !== "claimed"),
    })),
}));
