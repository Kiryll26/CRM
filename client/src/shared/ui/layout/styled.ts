import styled, { css } from 'styled-components'

export const Aside = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.theme_colors.mainBg};
        box-shadow: ${theme.theme_colors.boxShadow};
        width: ${theme.layout.aside.width}px;
    `}
`

export const Sticky = styled.div`
    top: 0;
    position: sticky;
`

export const Content = styled.div`
    max-width: 100%;
    padding: 0 20px;
`

export const Header = styled.div`
    width: 100%;
`

export const Layout = styled.div`
    display: grid;
    justify-content: flex-start;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 100vh;
`
