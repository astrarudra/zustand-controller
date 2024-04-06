import { create, useStore } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { temporal } from 'zundo';
import { shallow } from 'zustand/shallow'
import { INotificationSlice, notificationSlice } from './notification/notification.slice'
import { IGeneralSlice, generalSlice } from './general/general.slice';
import { ICounterSlice, counterSlice } from './counter/counter.slice';
import { useShallow } from 'zustand/react/shallow'
const useS = useShallow
export { useS }

export interface IOxyStore extends IGeneralSlice, INotificationSlice, ICounterSlice {}

export const useOxyStore = create<IOxyStore>()(
  temporal(
    immer(
      (...o) => ({
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
)

export const useUndoStore = (selector: any) => {
  return useStore(useOxyStore.temporal, selector);
}