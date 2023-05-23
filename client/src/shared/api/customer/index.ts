import client from '../client'
import { CUSTOMERS, TOP_CUSTOMERS } from '../consts'
import { BaseData } from '../types'

export interface CustomersData {
    id: number
    name: string
    email: string
    location: string
    phone: string
    total_spend: string
    total_orders: number
}

export interface Customers {
    limit?: number
    page: number
}

export const getTopCustomers = async () => {
    try {
        const response: CustomersData[] = await client.get(TOP_CUSTOMERS)

        return { response }
    } catch (err) {
        return { err }
    }
}

export const getCustomers = async ({ limit = 10, page }: Customers) => {
    try {
        const response: BaseData<CustomersData[]> = await client.get(CUSTOMERS, { params: { limit, page } })

        return { response }
    } catch (err) {
        return { err }
    }
}
