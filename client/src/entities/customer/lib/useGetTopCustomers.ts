import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getTopCustomers } from 'shared/api/customer'
import { useLoadingState } from 'shared/ui/loading'
import { errorsAlert } from 'shared/lib'

export const useGetTopCustomers = () => {
    const setLoading = useLoadingState((state) => state.setLoading)
    const query = useQuery(['top_customers'], getTopCustomers, { staleTime: 5000 })

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
        }
    }, [query])

    return query
}
