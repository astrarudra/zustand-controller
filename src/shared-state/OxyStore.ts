import { create, useStore } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { temporal } from 'zundo';
import { createWithEqualityFn  } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { INotificationSlice, notificationSlice } from './notification/notification.slice'
import { IGeneralSlice, generalSlice } from './general/general.slice';
import { ICounterSlice, counterSlice } from './counter/counter.slice';

export interface IOxyStore extends IGeneralSlice, INotificationSlice, ICounterSlice {}

export const useOxyStore = createWithEqualityFn<IOxyStore>()(
  temporal( // For Zundo - Undo Redo, Don't Need, Dont Add this.
    immer( // For Immutable State & one liner setState
      (...o) => ({ // Store Split into slices for better management.
        ...generalSlice(...o),
        ...notificationSlice(...o),
        ...counterSlice(...o),
      })
    ),// zundo options 
    { partialize: (s) => {
      const { counter, undoRedo } = s;
      return { counter, undoRedo}
      },
      equality: shallow
    }
  )
, shallow) // Default equality function

export const useUndoStore = (selector: any) => {
  return useStore(useOxyStore.temporal, selector);
}

export const useTemporalStore = create(useOxyStore.temporal);