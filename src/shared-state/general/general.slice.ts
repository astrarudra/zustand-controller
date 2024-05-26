import { StateCreator } from "zustand";

export interface IGeneralSlice {
  fsLoader: null | string,
  demoState: number,
  demoData: string
  undoRedo: boolean, // Used for triggering undo/redo stack artificially. Used by Enhancer withPause. The value does not matter as long as it changes.
  setState: (data: {[key: string]: any}) => void;
  remember: () => void;
  setLoader: (message: string | null) => void;
}

export const generalSlice: StateCreator<IGeneralSlice, [["zustand/immer", never]], [], IGeneralSlice> = (set) => ({
  fsLoader: null,
  demoState: 0,
  demoData: "I am connected to Zustand Store Listening and rendering 'demoData'. I will change if you click Run Controller.",
  undoRedo: false,
  // Dynamic setState for root variables.
  setState: (data: {[key: string]: any}) => set((s: any) => { 
    Object.keys(data).forEach((key) => {
      s[key] = data[key]
    })
  }),
  // The Usual Way
  setLoader: (message) => set((s) => {
    s.fsLoader = message
  }),
  remember: () => set((s) => {
    s.undoRedo = !s.undoRedo
  }),
})