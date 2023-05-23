export const getDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const daysWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    return {
        day: date.getDate().toString().padStart(2, '0'),
        month: (date.getMonth() + 1).toString().padStart(2, '0'),
        year: date.getFullYear(),
        hours: date.getHours().toString().padStart(2, '0'),
        minutes: date.getMinutes().toString().padStart(2, '0'),
        seconds: date.getSeconds().toString().padStart(2, '0'),
        dayWeek: daysWeek[date.getDay()],
        nameMonth: months[date.getMonth()],
    }
}
