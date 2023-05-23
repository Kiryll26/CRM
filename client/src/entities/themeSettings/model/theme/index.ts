import { ChangeEvent } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ThemeState {
    theme: 'light' | 'dark'
    toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void
}

export const themeState = create<ThemeState>()(
    devtools((set, get) => ({
        theme: 'dark',
        toggleTheme: (e) =>
            set((state) => ({
                theme: e.currentTarget.checked ? 'light' : 'dark',
            })),
    }))
)
