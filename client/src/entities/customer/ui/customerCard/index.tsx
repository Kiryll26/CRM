import * as React from 'react'
import { Td, Tr } from 'shared/ui'
import { CustomersData } from 'shared/api/customer'

interface Props {
    data: CustomersData
}

export const CustomerCard = ({ data }: Props) => {
    return (
        <Tr>
            {Object.entries(data).map(([key, item], index) =>
                key !== 'id' ? (
                    <Td key={`${data.email}_${index}`}>{item}</Td>
                ) : (
                    <React.Fragment key={`${data.email}_${index}`}></React.Fragment>
                )
            )}
        </Tr>
    )
}
