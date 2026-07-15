import { create } from "zustand";
import type { countStore as CountStore } from "./interfaces";

const useCount = create<CountStore>((set) => ({
    count: 0,

    increment: () =>
        set((state) => ({ count: state.count + 1, })),
    decrement: () =>
        set((state) => ({ count: state.count == 0 ? state.count : state.count - 1 })
        ),

    reset: () =>
        set({ count: 0, }),
}));

export default useCount;