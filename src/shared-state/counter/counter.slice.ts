import { StateCreator } from "zustand";

export interface ICounterSlice {
  counter: number,
  increase: () => void;
  decrease: () => void;
  resetCounter: () => void;
}

export const counterSlice: StateCreator<ICounterSlice, [["zustand/immer", never]], [], ICounterSlice> = (set) => ({
  counter: 0,
  increase: () => set((s) => ({ counter: s.counter + 1 })),
  decrease: () => set((s) => ({ counter: s.counter - 1 })),
  resetCounter: () =>set((s) => ({ counter: 0})),
})