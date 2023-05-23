import * as React from 'react'
import { Table, Tbody, Th, Thead, Tr, Wrapper } from 'shared/ui'
import { CustomerCard } from 'entities/customer/ui/customerCard'
import { Pagination, useGetCustomers } from 'entities/customer'
import { theadCustomersList } from 'shared/configs/customers'

export const CustomersList = () => {
    const query = useGetCustomers()

    return (
        <>
            {query.data && query.data.response ? (
                <Wrapper>
                    <Table>
                        <Thead>
                            <Tr>
                                {theadCustomersList.map((item) => (
                                    <Th key={item}>{item}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {query.data.response.rows.map((item, index) => (
                                <CustomerCard key={`customer_${index}_${Math.floor(Date.now() / 1e3)}`} data={item} />
                            ))}
                        </Tbody>
                    </Table>
                    <Pagination />
                </Wrapper>
            ) : null}
        </>
    )
}
