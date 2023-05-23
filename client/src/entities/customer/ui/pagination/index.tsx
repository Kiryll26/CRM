import * as React from 'react'
import styled from 'styled-components'
import { Button } from 'shared/ui'
import { useCustomerState } from 'entities/customer/model'
import { getPages } from 'shared/lib'

export const Pagination = () => {
    const state = useCustomerState((state) => state)
    const { pages, pagesCount } = getPages({
        totalDataCount: state.countPages,
        dataCount: state.dataCount,
        limit: state.limitPagination,
        page: state.page,
    })

    return (
        <WrapStyled>
            <Button onClick={() => state.setPage(1)}>{'<<'}</Button>
            {pages.length ? (
                pages.map((page) => (
                    <Button
                        size={Button.size.md}
                        key={`pagination_${page}`}
                        onClick={() => state.setPage(page)}
                        active={page === state.page}
                    >
                        {page}
                    </Button>
                ))
            ) : (
                <></>
            )}
            <Button onClick={() => state.setPage(pagesCount)}>{'>>'}</Button>
        </WrapStyled>
    )
}

const WrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
