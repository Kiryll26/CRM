import styled, { css } from 'styled-components'

export enum Size {
    sm = 'sm',
    md = 'md',
}

export interface PropsButtonStyled {
    active?: boolean
    size?: Size
}

const activeStyled = css`
    ${({ theme }) =>
        `
            cursor: initial;
            color: ${theme.theme_colors.txtWhite};
            background-image: linear-gradient(
                to right, 
                ${theme.theme_colors.mainColor}, 
                ${theme.theme_colors.secondColor}
            );
        `}
`

export const Button = styled.button<PropsButtonStyled>`
    display: flex;
    align-items: center;
    font-weight: 600;
    border: 0;
    text-decoration: none;
    transition: color 0.3s ease 0s;
    cursor: pointer;
    color: ${({ theme }) => theme.theme_colors.txtColor};

    &:not(.active) {
        &:hover {
            color: ${({ theme, active }) => !active && theme.theme_colors.mainColor};
        }
    }

    &.active {
        ${activeStyled}
    }

    ${({ size }) => {
        if (size === 'sm') {
            return css`
                font-size: 12px;
                padding: 4px 8px;
                border-radius: 4px;
            `
        }
        if (size === 'md') {
            return css`
                font-size: 18px;
                padding: 8px 12px;
                border-radius: 8px;
            `
        }

        return css`
            padding: 15px 25px;
            border-radius: 15px;
        `
    }}

    ${({ active = false }) => {
        if (!active) return ''
        return activeStyled
    }}
`
