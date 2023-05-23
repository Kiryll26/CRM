import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faCartShopping, faCircleDollarToSlot, faReceipt } from '@fortawesome/free-solid-svg-icons'

export interface StatusesListType {
    icon: IconProp
    count: string
    title: string
}

export const statusesList: StatusesListType[] = [
    {
        icon: faShoppingBag,
        count: '1,995',
        title: 'Total sales',
    },
    {
        icon: faCartShopping,
        count: '2,001',
        title: 'Daily visits',
    },
    {
        icon: faCircleDollarToSlot,
        count: '$2,632',
        title: 'Total income',
    },
    {
        icon: faReceipt,
        count: '1,711',
        title: 'Total orders',
    },
]
