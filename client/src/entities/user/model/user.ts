import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Role } from 'shared/api/user'

interface SetUserData {
    user: boolean
    id: number
    role: Role | null
    email: string
    name: string
}

interface useUserState extends SetUserData {
    setUser: (user: SetUserData) => void
    reset: () => void
}

const initialState: SetUserData = {
    id: 0,
    user: false,
    role: null,
    name: '',
    email: '',
}

export const useUserState = create<useUserState>()(
    devtools((set, get) => ({
        ...initialState,
        setUser: (user) => set(() => user),
        reset: () => set(() => initialState),
    }))
)
