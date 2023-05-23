import * as React from 'react'
import styled from 'styled-components'

import { statusesList } from 'entities/statuses/lib'
import { StatusCard } from 'entities/statuses/ui/statusCard'

export const StatusesList = () => {
    return (
        <ListWrap>
            {statusesList.map((status, index) => (
                <StatusCard key={`status-card-${index}`} icon={status.icon} count={status.count} title={status.title} />
            ))}
        </ListWrap>
    )
}

const ListWrap = styled.div`
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
