import * as React from 'react'
import styled from 'styled-components'

import { StatusesList, TopCustomers, LatestOrders } from './ui'

const Dashboard = () => {
    return (
        <GridStyled>
            <StatusesList />
            <TopCustomers />
            <LatestOrders />
        </GridStyled>
    )
}

const GridStyled = styled.div`
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;
    @media ${({ theme }) => theme.mediaMin.lg} {
        grid-template-columns: 1fr 1fr;
    }
`

export default Dashboard
