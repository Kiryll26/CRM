import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UseStatuses {
    error: null | string
    statuses: []
}

export const useStatuses = create<UseStatuses>()(
    devtools((set, get) => ({
        error: null,
        statuses: [],
    }))
)
