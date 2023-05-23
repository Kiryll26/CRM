import * as React from 'react'
import styled from 'styled-components'

import { headTable } from 'shared/configs/order'
import { getColor, setDate, useGetLatestOrders } from 'entities/order'
import { Badge, Table, Tbody, Td, Th, Thead, Tr, Wrapper } from 'shared/ui'

export const LatestOrders = () => {
    const query = useGetLatestOrders()

    return (
        <>
            {query.data && query.data.response ? (
                <WrapperStyled>
                    <Table>
                        <Thead>
                            <Tr>
                                {headTable.map((item, index) => (
                                    <Th key={`latest-orders-thead-${index}`}>{item}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {query.data.response.map((order) => (
                                <Tr key={`latest-order-${order.id}`}>
                                    {Object.entries(order).map(([key, value], index) =>
                                        key === 'status' ? (
                                            <Td key={`latest-order-item-${order.id}-${index}`}>
                                                <Badge bg={Badge.bg[getColor(value)]}>{value}</Badge>
                                            </Td>
                                        ) : key === 'date' ? (
                                            <Td key={`latest-order-item-${order.id}-${index}`}>{setDate(+value)}</Td>
                                        ) : (
                                            <Td key={`latest-order-item-${order.id}-${index}`}>{value}</Td>
                                        )
                                    )}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </WrapperStyled>
            ) : null}
        </>
    )
}

const WrapperStyled = styled(Wrapper)`
    @media (min-width: 1300px) {
        grid-column: span 2;
    }
`
