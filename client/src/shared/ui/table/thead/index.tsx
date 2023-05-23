import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Thead = ({ children }: Props) => {
    return <TheadStyled>{children}</TheadStyled>
}

const TheadStyled = styled.thead`
    background-color: ${({ theme }) => theme.theme_colors.secondBg};
`
