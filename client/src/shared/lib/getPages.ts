interface Props {
    page: number // текущая страница
    limit: number // количество которое мы хотим выводить
    dataCount: number // выводимое число данных
    totalDataCount: number // общие количество данных
}

interface State {
    pages: number[]
    pagesCount: number
}

export const getPages = ({ totalDataCount, dataCount, limit, page }: Props): State => {
    const state: State = { pages: [], pagesCount: 0 }
    // получаем середину нашего лимита
    const center: number = Math.ceil(limit / 2)
    // получаем число страниц
    state.pagesCount = Math.ceil(totalDataCount / dataCount)

    // создаем массив нумерации страниц
    state.pages = Array(state.pagesCount)
        .fill(0)
        .map((_, i) => i + 1)

    // если текущая страница меньши или равно середины лимита
    // то возвращаем как и в самом начале
    if (page <= center) {
        return {
            ...state,
            pages: state.pages.slice(0, limit),
        }
    }

    // если текущая страница больше или равно
    // общего количество данных у которого отняли середину лимита
    // то возвращаем начиная с общего количество данных у которого отняли лимит
    // заканчивая общим количеством данных
    if (page >= state.pagesCount - center) {
        return {
            ...state,
            pages: state.pages.slice(state.pagesCount - limit, state.pagesCount),
        }
    }

    return {
        ...state,
        pages: state.pages.slice(page - center, limit + page - center),
    }
}
