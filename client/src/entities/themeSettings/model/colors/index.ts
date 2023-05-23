import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ChooseColorType } from 'shared/configs'

interface UseColorsState {
    color: ChooseColorType
    toggleColor: (color: ChooseColorType) => void
}

export const useColorsState = create<UseColorsState>()(
    devtools((set, get) => ({
        color: 'blue',
        toggleColor: (color) =>
            set((state) => ({
                color: color,
            })),
    }))
)
