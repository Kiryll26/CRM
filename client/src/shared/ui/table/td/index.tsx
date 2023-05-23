import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Td = ({ children }: Props) => {
    return <TdStyled>{children}</TdStyled>
}

const TdStyled = styled.td`
    padding: 15px 10px;
    text-transform: capitalize;
`
