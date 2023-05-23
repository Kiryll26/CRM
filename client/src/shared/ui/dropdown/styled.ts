import styled, { css } from 'styled-components'

export enum Position {
    left = 'left',
    right = 'right',
}

export enum Size {
    full = 'full',
}

export interface PropsStyled {
    active: boolean
    position?: Position
    size?: Size
}
export interface PropsBox {
    size?: Size
}

export const Content = styled.div<PropsStyled>`
    position: absolute;
    top: calc(100% + 10px);
    border-radius: 15px;
    overflow: hidden;
    transform: scale(0);
    transition: transform 0.3s ease 0s;

    ${({ size }) => {
        const isFull = size === 'full'
        return css`
            width: ${isFull ? '100%' : 'max-content'};
            max-width: ${isFull ? 'none' : '400px'};
            min-width: ${isFull ? '100%' : '200px'};
        `
    }}

    ${({ theme, position = 'left', size }) => {
        const isFull = size === 'full'
        return css`
            ${position}: 0;
            transform-origin: ${isFull ? `top center` : `top ${position}`};
            background-color: ${theme.theme_colors.mainBg};
            box-shadow: ${theme.theme_colors.boxShadow};
        `
    }}

    ${({ theme, active }) =>
        active
            ? css`
                  transform: scale(1);
                  transition: transform 0.5s ${theme.transition.cubic};
              `
            : ''}
`

export const Header = styled.div`
    border: 0;
    outline: 0;
    background-color: transparent;
    position: relative;
    cursor: pointer;
`

export const Dropdown = styled.div<PropsBox>`
    position: relative;
    z-index: 99;

    ${({ size }) => css`
        width: ${size ? '100%' : 'auto'};
        display: ${size ? 'block' : 'inline-block'};
    `}
`
