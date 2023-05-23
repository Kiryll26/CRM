import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface CustomerState {
    page: number
    dataCount: number
    countPages: number
    limitPagination: number
    setPage: (page: number) => void
    setCountPages: (count: number) => void
}

export const useCustomerState = create<CustomerState>()(
    devtools((set, get) => ({
        page: 1,
        dataCount: 10,
        countPages: 0,
        limitPagination: 10,
        setPage: (page) => set(() => ({ page: page })),
        setCountPages: (count) => set(() => ({ countPages: count })),
    }))
)
