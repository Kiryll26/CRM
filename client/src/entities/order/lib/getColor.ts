import { Status } from 'shared/api/order'

export type Color = 'orange' | 'blue' | 'green' | 'red'

export const getColor = (status: Status): Color => {
    const config: Record<string, Color> = {
        pending: 'orange',
        shipping: 'blue',
        paid: 'green',
        refund: 'red',
    }

    return config[status]
}
