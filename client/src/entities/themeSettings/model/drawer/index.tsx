import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface DrawerState {
    isOpen: boolean
    toggleDrawer: () => void
}

export const useDrawerState = create<DrawerState>()(
    devtools((set, get) => ({
        isOpen: false,
        toggleDrawer: () =>
            set((state) => ({
                isOpen: !state.isOpen,
            })),
    }))
)
