import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getLatestOrders } from 'shared/api/order'
import { useLoadingState } from 'shared/ui/loading'
import { errorsAlert } from 'shared/lib'

export const useGetLatestOrders = () => {
    const setLoading = useLoadingState((state) => state.setLoading)
    const query = useQuery(['latest_orders'], getLatestOrders, { staleTime: 5000 })

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
