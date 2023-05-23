import client from '../client'
import { ORDERS, LATEST_ORDERS } from '../consts'
import { BaseData } from '../types'

export type Status = 'pending' | 'shipping' | 'paid' | 'refund'

export interface OrderData {
    id: number
    user: string
    date: string
    total_price: number
    status: Status
}

export interface Customers {
    limit?: number
    page: number
}

export const getLatestOrders = async () => {
    try {
        const response: OrderData[] = await client.get(LATEST_ORDERS)

        return { response }
    } catch (err) {
        return { err }
    }
}

export const getOrders = async ({ limit = 10, page }: Customers) => {
    try {
        const response: BaseData<OrderData[]> = await client.get(ORDERS, { params: { limit, page } })

        return { response }
    } catch (err) {
        return { err }
    }
}
