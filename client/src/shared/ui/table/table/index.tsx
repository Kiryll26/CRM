import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Table = ({ children }: Props) => {
    return <TableStyled>{children}</TableStyled>
}

const TableStyled = styled.table`
    width: 100%;
    min-width: 400px;
    border-spacing: 0;
    text-align: left;
`
