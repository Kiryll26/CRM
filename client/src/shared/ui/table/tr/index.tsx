import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Tr = ({ children }: Props) => {
    return <TrStyled>{children}</TrStyled>
}

const TrStyled = styled.tr``
