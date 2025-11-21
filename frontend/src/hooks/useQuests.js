import { create } from "zustand";

const testQuests = [
  {
    id: 0,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 100,
    progress: 100,
  },
  {
    id: 1,
    name: "Dark Souls 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    xp: 30,
    progress: 84,
  },
  {
    id: 2,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 10,
    progress: 12,
  },
  {
    id: 3,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 15,
    progress: 100,
  },
  {
    id: 4,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 50,
    progress: 69,
  },
  {
    id: 5,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 67,
    progress: 100,
  },
  {
    id: 6,
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 20,
    progress: 40,
  },
];

export const useQuests = create((set) => ({
  quests: testQuests,
  setQuests: (newQuests) => set({ quests: newQuests }),
  resetQuests: () => set({ quests: [] }),
  addQuest: (quest) => set((state) => ({ quests: state.quests.push(quest) })),
  removeQuest: (id) =>
    set((state) => ({ quests: state.quests.filter((q) => q.id !== id) })),
}));
