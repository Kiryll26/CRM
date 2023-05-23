import styled, { css } from 'styled-components'

export enum Bg {
    red = 'red',
    orange = 'orange',
    green = 'green',
    blue = 'blue',
}

export interface PropsBadge {
    // bg?: 'red'|'orange'|'green'|'blue'
    bg?: Bg
}

export const Badge = styled.span<PropsBadge>`
    padding: 6px 11px;
    border-radius: 10px;

    ${({ theme, bg = Bg.green }) => css`
        color: ${theme.theme_colors.txtWhite};
        background-color: ${theme.colors[bg]};
        box-shadow: ${theme.theme_colors.boxShadow};
    `}
`
