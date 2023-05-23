import { getDate } from 'shared/lib'

export const setDate = (timestamp: number) => {
    const date = getDate(timestamp)

    return `${date.day}.${date.month}.${date.year}`
}
