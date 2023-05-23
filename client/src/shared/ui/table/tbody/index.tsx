import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Tbody = ({ children }: Props) => {
    return <TbodyStyled>{children}</TbodyStyled>
}

const TbodyStyled = styled.tbody`
    tr {
        &:hover {
            ${({ theme }) => css`
                color: ${theme.theme_colors.txtWhite};
                background-color: ${theme.theme_colors.mainColor};
            `}
        }
    }
`
