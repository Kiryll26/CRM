import * as React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCustomers } from 'shared/api/customer'
import { useCustomerState } from '../model'
import { useLoadingState } from 'shared/ui/loading'
import { errorsAlert } from 'shared/lib'

export const useGetCustomers = () => {
    const queryClient = useQueryClient()
    const state = useCustomerState((state) => state)
    const setLoading = useLoadingState((state) => state.setLoading)
    const countPages = state.countPages / state.dataCount
    const query = useQuery(
        ['customers', state.page],
        () => getCustomers({ page: state.page, limit: state.dataCount }),
        {
            keepPreviousData: true,
            staleTime: 5000,
        }
    )

    React.useEffect(() => {
        if (query.isLoading || query.isFetching) {
            setLoading(true)
        }

        if (query.isError) {
            setLoading(false)
            errorsAlert(query.error)
        }

        if (query.data && query.data.response) {
            setLoading(false)
            if (!state.countPages) {
                state.setCountPages(query.data.response.count)
            }
        }
    }, [state.page, query])

    // Предварительная выборка следующей страницы!
    React.useEffect(() => {
        if (!query.isPreviousData && state.page < countPages) {
            queryClient.prefetchQuery(['customers', state.page + 1], () =>
                getCustomers({ page: state.page + 1, limit: state.dataCount })
            )
        }
    }, [state.page, query.isPreviousData, queryClient, query.data])

    return query
}
