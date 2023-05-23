import * as React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr, Wrapper } from 'shared/ui'
import { headTable } from 'shared/configs/customers'
import { useGetTopCustomers } from 'entities/customer'

export const TopCustomers = () => {
    const query = useGetTopCustomers()

    return (
        <>
            {query.data && query.data.response ? (
                <Wrapper>
                    <Table>
                        <Thead>
                            <Tr>
                                {headTable.map((item, index) => (
                                    <Th key={`customer_title_${index}`}>{item}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {query.data.response.map((item, index) => (
                                <Tr key={`${item.id}_${index}`}>
                                    {Object.entries(item)
                                        .filter(
                                            ([key, _]) =>
                                                key === 'name' || key === 'total_orders' || key === 'total_spend'
                                        )
                                        .map(([key, value]) => (
                                            <Td key={`${key}_${value}`}>{value}</Td>
                                        ))}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Wrapper>
            ) : null}
        </>
    )
}
