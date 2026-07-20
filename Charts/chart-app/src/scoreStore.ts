import { create } from "zustand";
import type { Score } from "./interfaces";

export const useScore = create<Score>((set) => ({
  score: [],
  addScore: (currOverScore: number) =>
    set((state) => {
      const newScore = [...state.score, currOverScore];
      return { score: newScore };
    }),
}));
