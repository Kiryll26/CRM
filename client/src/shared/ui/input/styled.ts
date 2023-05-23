import styled, { css } from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 60px;
    font-size: 1rem;
    outline: none;
    padding: 0 20px;
    border: 0;

    ${({ theme }) => css`
        color: ${theme.theme_colors.txtColor};
        background-color: ${theme.theme_colors.mainBg};
        box-shadow: ${theme.theme_colors.boxShadow};
        border-radius: ${theme.wrapper.borderRadius}px;
    `}
`

export const TextError = styled.div`
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.red};
`
