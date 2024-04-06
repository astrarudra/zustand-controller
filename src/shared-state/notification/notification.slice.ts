import { StateCreator } from "zustand";

export type AlertColor = 'success' | 'info' | 'warning' | 'error';
export interface NotificationState {
    open?: boolean;
    type?: AlertColor;
    title?: string;
    message?: string;
    timeout?: number | null;
}

export interface INotificationSlice {
    notification: NotificationState
    clearNotify: () => void
    notify: (notification: NotificationState) => void
}

export const notificationSlice: StateCreator<INotificationSlice, [["zustand/immer", never]], [], INotificationSlice> = (set) => ({
    notification: { open: false, type: "info", message: "", title: "", timeout: 3000},
    clearNotify: () => set((s) => {
        s.notification.open = false;
    }),
    notify: (notification: NotificationState) => set((s) => {
        s.notification = { type: "error", timeout: 3000, ...notification, open: true };
    })
})