import { create } from "zustand";

const testQuests = [
  {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 100,
    progress: 100,
  },
  {
    name: "Dark Souls 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    xp: 30,
    progress: 84,
  },
  {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 10,
    progress: 12,
  },
  {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 15,
    progress: 100,
  },
  {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 50,
    progress: 69,
  },
  {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 67,
    progress: 100,
  },
  {
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
  removeQuest: (quest) =>
    set((state) => ({ quests: state.quests.filter((q) => q !== quest) })),
}));
