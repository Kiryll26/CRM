import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Th = ({ children }: Props) => {
    return <ThStyled>{children}</ThStyled>
}

const ThStyled = styled.th`
    padding: 15px 10px;
    text-transform: capitalize;
`
