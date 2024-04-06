import { StateCreator } from "zustand";

export interface ICounterSlice {
  counter: number,
  increment: () => void;
  decrement: () => void;
}

export const counterSlice: StateCreator<ICounterSlice, [["zustand/immer", never]], [], ICounterSlice> = (set) => ({
  counter: 0,
  increment: () => set((s) => ({ counter: s.counter + 1 })),
  decrement: () => set((s) => ({ counter: s.counter - 1 }))
})