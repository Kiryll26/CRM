import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const withQuery = (Component: () => JSX.Element) => () =>
    (
        <QueryClientProvider client={queryClient}>
            {<Component />}
            {/* <ReactQueryDevtools initialIsOpen /> */}
        </QueryClientProvider>
    )
