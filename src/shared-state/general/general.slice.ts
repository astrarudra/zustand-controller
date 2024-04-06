import { StateCreator } from "zustand";

export interface IGeneralSlice {
  undoRedo: boolean, // Used for triggering undo/redo stack artificially. Used by Enhancer withPause. The value does not matter as long as it changes.
  remember: () => void;
}

export const generalSlice: StateCreator<IGeneralSlice, [["zustand/immer", never]], [], IGeneralSlice> = (set) => ({
  undoRedo: false,
  remember: () => set((s) => {
    s.undoRedo = !s.undoRedo
  }),
})